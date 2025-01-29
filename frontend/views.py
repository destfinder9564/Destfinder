from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib import messages
from .models import UserProfile
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import redirect
from .forms import EditProfileForm
from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView
from django.urls import reverse_lazy
from django.core.mail import send_mail
from django.conf import settings
import re


# Home View
def home_view(request):
    return render(request, 'index.html', {'authenticated': request.user.is_authenticated})
def about_view(request):
    return render(request, 'about.html')
def contact_view(request):
    return render(request, 'contact.html')
# Register View

def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        password_confirm = request.POST['password_confirm']
        email = request.POST['email']

        # Check if email ends with @gmail.com
        if not email.endswith('@gmail.com'):
            messages.error(request, 'Please enter a valid Gmail address (e.g., example@gmail.com).')
            return redirect('register')

        # Check if username or email already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username already exists')
            return redirect('register')
        elif User.objects.filter(email=email).exists():
            messages.error(request, 'Email already exists')
            return redirect('register')

        # Check if password and confirmation match
        if password != password_confirm:
            messages.error(request, 'Passwords do not match')
            return redirect('register')

        # Create the new user
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()
        messages.success(request, 'Registration successful')
        return redirect('login')  # Redirect to login page after successful registration

    return render(request, 'register.html')

# Login View
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            if user.is_active:  # Ensure the user account is active
                login(request, user)
                return redirect('home')  # Replace 'home' with your homepage URL name
            else:
                messages.error(request, 'Your account is inactive.')
        else:
            messages.error(request, 'Invalid username or password.')

    return render(request, 'login.html')

# Logout View
def logout_view(request):
    logout(request)  # Log out the use
    return redirect('login')  # Redirect to the home page
@login_required
def destination_view(request):
    return render(request, 'destination.html')
def transportation(request):
    return render(request, 'transportation.html')
def local_guides(request):
    return render(request, 'guide.html')
def weather(request):
    return render(request, 'weather.html')

@login_required
def budget_calculator_view(request):
    return render(request, 'budget.html')

@login_required
def find_friend_view(request):
    return render(request, 'findfriend.html')
@login_required
def profile_view(request):
    user = request.user
    profile = user.userprofile  # Access the related UserProfile instance
    context = {
        'username': user.username,
        'email': user.email,
        'profile_pic': profile.profile_pic.url,
    }
    return render(request, 'profile.html', context)
@login_required
def edit_profile_view(request):
    user = request.user
    profile = user.userprofile  # Access the related UserProfile instance

    if request.method == 'POST':
        form = EditProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            return redirect('profile')  # Redirect to the profile page
    else:
        form = EditProfileForm(instance=profile)

    return render(request, 'edit_profile.html', {'form': form})


class CustomPasswordResetView(PasswordResetView):
    template_name = 'password_reset_form.html'  # Your custom form template
    email_template_name = 'password_reset_email.html'  # Custom email template
    success_url = reverse_lazy('password_reset_done')

# Password reset done view
class CustomPasswordResetDoneView(PasswordResetDoneView):
    template_name = 'password_reset_done.html'  # Your custom done template

# Password reset confirm view
class CustomPasswordResetConfirmView(PasswordResetConfirmView):
    template_name = 'password_reset_confirm.html'  # Your custom confirm template
    success_url = reverse_lazy('password_reset_complete')

# Password reset complete view
class CustomPasswordResetCompleteView(PasswordResetCompleteView):
    template_name = 'password_reset.html'  

#coontact
from django.core.mail import send_mail
from django.http import JsonResponse

def contact_view(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        if name and email and message:
            # Send email to admin
            admin_email = settings.EMAIL_HOST_USER  # Use your configured email
            subject = "New Contact Form Submission"
            full_message = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
            
            try:
                send_mail(
                    subject=subject,
                    message=full_message,
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=[admin_email],  # Admin email
                    fail_silently=False,
                )

                # Send a thank-you email to the user
                send_mail(
                    subject="Thank You for Contacting Us",
                    message=f"Dear {name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest Regards,\nTravel Together Team",
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=[email],  # User email
                    fail_silently=False,
                )

                return JsonResponse({"success": True, "message": "Message sent successfully!"})
            except Exception as e:
                return JsonResponse({"success": False, "message": str(e)})
        else:
            return JsonResponse({"success": False, "message": "All fields are required!"})
    
    return render(request, "contact.html")
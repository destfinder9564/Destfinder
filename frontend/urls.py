from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    # Public routes
    path('', views.home_view, name='home'),
    path('about/', views.about_view, name='about'),
    path('contact/', views.contact_view, name='contact'),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('profile/', views.profile_view, name='profile'),
    path('profile/edit_profile/', views.edit_profile_view, name='edit_profile'),
    path(
        'password-reset/',
        auth_views.PasswordResetView.as_view(
            template_name='password_reset.html',
            extra_context={'view': 'password_reset'}
        ),
        name='password_reset'
    ),
    path(
        'password-reset/done/',
        auth_views.PasswordResetDoneView.as_view(
            template_name='password_reset.html',
            extra_context={'view': 'password_reset_done'}
        ),
        name='password_reset_done'
    ),
    path(
        'reset/<uidb64>/<token>/',
        auth_views.PasswordResetConfirmView.as_view(
            template_name='password_reset.html',
            extra_context={'view': 'password_reset_confirm'}
        ),
        name='password_reset_confirm'
    ),
    path(
        'reset/done/',
        auth_views.PasswordResetCompleteView.as_view(
            template_name='password_reset.html',
            extra_context={'view': 'password_reset_complete'}
        ),
        name='password_reset_complete'
    ),

    # Private routes (Login Required)
    path('destination/', views.destination_view, name='destination'),
    path('budget-calculator/', views.budget_calculator_view, name='budget_calculator'),
    path('find-friend/', views.find_friend_view, name='find_friend'),
    path('transportation/', views.transportation, name='transportation'),
    path('local-guides/', views.local_guides, name='local_guides'),
    path('weather/', views.weather, name='weather'),

    
    
]

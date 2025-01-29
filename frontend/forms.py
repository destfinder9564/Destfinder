
from django import forms
from django.contrib.auth.models import User
from django import forms
from .models import UserProfile

class EditProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['profile_pic','full_name','mobile_num','location', 'bio', ]

        widgets = {
            'bio': forms.Textarea(attrs={'rows': 3, 'placeholder': 'Write about yourself...'}),
        }




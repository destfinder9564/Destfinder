from django.contrib import admin
from .models import UserProfile,ContactMessage

admin.site.register(UserProfile)




@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')  # Columns to show in the admin list view
    list_filter = ('created_at',)  # Filters for easier management
    search_fields = ('name', 'email', 'subject')  # Search box

from django.contrib import admin

from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Contact Info', {'fields': ['email', 'name', 'phone']}),
        ('Message', {'fields': ['subject', 'message']}),
    ]
    list_display = ('email', 'name', 'phone', 'subject')
    list_filter = ['email']
    search_fields = ['email']


admin.site.register(Contact, ContactAdmin)


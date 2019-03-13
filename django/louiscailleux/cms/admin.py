from django import forms
from django.contrib import admin

from .models import Block as BlockModel


class BlockAdminForm(forms.ModelForm):
    LANGUAGES = (
        ('', '(-- Please select a language --)'),
        ('en', 'English'),
        ('ko', 'Korean'),
        ('fr', 'French')
    )

    def __init__(self, *args, **kwargs):
        super(BlockAdminForm, self).__init__(*args, **kwargs)
        self.fields['language_code'] = forms.ChoiceField(widget=forms.Select, choices=self.LANGUAGES)

    class Meta:
        model = BlockModel
        fields = ['language_code']


class BlockAdmin(admin.ModelAdmin):
    form = BlockAdminForm;
    fieldsets = [
        ('General', {'fields': ['title', 'show_title', 'identifier', 'is_active']}),
        ('Content', {'fields': ['content', 'language_code']}),
    ]
    list_display = ('title', 'show_title', 'identifier', 'is_active', 'content', 'language_code')
    list_filter = ['identifier']
    search_fields = ['identifier']


admin.site.register(BlockModel, BlockAdmin)

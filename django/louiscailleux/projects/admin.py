from django import forms
from django.contrib import admin

from .models import Project as ProjectModel


class ProjectAdminForm(forms.ModelForm):
    LANGUAGES = (
        ('', '(-- Please select a language --)'),
        ('en', 'English'),
        ('ko', 'Korean'),
        ('fr', 'French')
    )

    def __init__(self, *args, **kwargs):
        super(ProjectAdminForm, self).__init__(*args, **kwargs)
        self.fields['language_code'] = forms.ChoiceField(widget=forms.Select, choices=self.LANGUAGES)

    class Meta:
        model = ProjectModel
        fields = ['language_code']


class ProjectAdmin(admin.ModelAdmin):
    form = ProjectAdminForm
    fieldsets = [
        ('General', {'fields': ['title', 'link', 'image']}),
        ('Content', {'fields': ['description', 'language_code']}),
    ]
    list_display = ('title', 'link', 'image', 'description', 'language_code')
    list_filter = ['title']
    search_fields = ['title']


admin.site.register(ProjectModel, ProjectAdmin)

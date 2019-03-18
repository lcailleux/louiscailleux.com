from django.test import TestCase
from ..models import Project


class ProjectsTest(TestCase):
    def setUp(self):
        Project.objects.create(
            title='Test Project 1',
            description='Description project 1',
            link='https://example-link.com',
            image='https://example-image.com',
            language_code='en',
        )
        Project.objects.create(
            title='Test Project 2',
            description='Description project 2',
            link='https://example-link.com',
            image='https://example-image.com',
            language_code='fr',
        )

    def test_project_title(self):
        test_project_1 = Project.objects.get(title='Test Project 1')
        test_project_2 = Project.objects.get(title='Test Project 2')
        self.assertEqual(test_project_1.get_description(), "Description project 1")
        self.assertEqual(test_project_2.get_description(), "Description project 2")

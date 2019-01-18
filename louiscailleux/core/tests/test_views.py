from django.test import SimpleTestCase, override_settings


class CustomErrorHandlerTests(SimpleTestCase):

    def test_handler_renders_template_response(self):
        response = self.client.get('/404/')
        self.assertContains(response, '404 Page Not Found', status_code=404)

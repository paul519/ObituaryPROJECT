from django.contrib.sitemaps import Sitemap
from .models import myapp

class ObituarySitemap(Sitemap):
    changefreq = "daily"
    priority = 0.7

    def items(self):
        return myapp.objects.all()

    def lastmod(self, obj):
        return obj.submission_date

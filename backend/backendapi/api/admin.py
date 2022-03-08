from django.contrib import admin
from .models import Company

# Register your models here.


admin.site.register(Company)


class CompanyModel(admin.ModelAdmin):
    list_filter = (
        'cname', 'sitename', 'siteaddress', 'utillityname', 'category', 'emailaddress', 'contact_name')
    list_display = (
        'cname', 'sitename', 'siteaddress', 'utillityname', 'category', 'emailaddress', 'contact_name')

from django import template
from main_app.utils import capitalize_title

register = template.Library()

@register.filter(name='capitalize_title')
def capitalize_title_filter(value):
    return capitalize_title(value)

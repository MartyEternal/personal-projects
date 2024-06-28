# Generated by Django 5.0.6 on 2024-06-28 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Adventure',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age_range', models.IntegerField(default=5)),
                ('description', models.TextField(max_length=300)),
                ('end_count', models.IntegerField(default=1)),
            ],
        ),
    ]

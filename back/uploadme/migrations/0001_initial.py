# Generated by Django 4.0.4 on 2022-05-30 08:33

from django.db import migrations, models
import uploadme.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=32)),
                ('cover', models.ImageField(blank=True, null=True, upload_to=uploadme.models.upload_path)),
            ],
        ),
    ]

from flask import render_template, redirect, url_for, flash
from app import application
from app.forms import SignUpForm

import boto3



db = boto3.resource('dynamodb', region_name='us-east-1')
table = db.Table('managers')

@application.route('/')
@application.route('/home')
def home_page():
    return render_template('home.html')


# import redirect, url_form
# from app.forms import SignUpForm


@application.route('/post_api_submit', methods=['GET', 'POST'])
def put_api():
    form = SignUpForm()

    if form.validate_on_submit():
        table.put_item(
            Item={
                'id': form.id.data, 'firstName': form.firstName.data, 'lastName': form.lastName.data, 'email': form.email.data,
                'phoneNumber': form.phoneNumber.data, 'supervisor': form.supervisor.data
            }
        )
        msg = format(form.firstName.data), format(form.lastName.data), format(form.email.data), format(form.phoneNumber.data), format(form.supervisor.data)
        flash(msg)
        return redirect(url_for('home_page'))
    return render_template('post_api_submit.html', form=form)

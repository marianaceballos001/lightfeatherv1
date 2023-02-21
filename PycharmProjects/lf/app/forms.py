from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, SubmitField
from wtforms.validators import DataRequired


class SignUpForm(FlaskForm):
    id = StringField(validators=[DataRequired()])
    firstName = StringField(validators=[DataRequired()])
    lastName = StringField(validators=[DataRequired()])
    email = StringField(validators=[DataRequired()])
    phoneNumber = StringField(validators=[DataRequired()])
    supervisor = StringField(validators=[DataRequired()])
    submit = SubmitField()

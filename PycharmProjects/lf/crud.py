import boto3
from boto3.dynamodb.conditions import Key


#db = boto3.resource('dynamodb', region_name='us-east-1')
#table = db.Table('managers')

# get item
#response = table.get_item(Key={'email': 'lf@gotjob.com'})
#print(response['Item'])



def query_movies(id, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb')


    table = dynamodb.Table('managers')

    response = table.query(
        KeyConditionExpression=Key('id')
    )
    print(response['Item'])

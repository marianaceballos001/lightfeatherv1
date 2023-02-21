import boto3
from boto3.dynamodb.conditions import Key
from pprint import pprint

def query_managers(id, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb')


    table = dynamodb.Table('managers')

    response = table.query(
        KeyConditionExpression=Key('id').eq(id)
    )

    return response['Items']




if __name__ == "__main__":
    query_id="1"
    print("managers from {} ".format(query_id))

    mrs = query_managers(query_id)

    for mr in mrs:
        print(mr['jurisdiction'], "-", mr['lastName'], mr['firstName'])





db = boto3.resource('dynamodb')

table = db.Table('employee')

response = table.scan()

data = response['Items']
pprint(data)


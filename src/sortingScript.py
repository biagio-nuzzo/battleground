import json

  
f = open('./data.json')

data = json.load(f)

heroes_json = [] 
cards_json = []
powers_json = []
magic_json = []

for i in data['cards']:
    if(i['cardTypeId'] == 3):
        heroes_json.append(i)
    
    if(i['cardTypeId'] == 4):
        cards_json.append(i)

    if(i['cardTypeId'] == 10):
        powers_json.append(i)

    if(i['cardTypeId'] == 5):
        magic_json.append(i)


with open('heroes.json', 'w') as outfile:
    json.dump(heroes_json, outfile)

with open('cards.json', 'w') as outfile:
    json.dump(cards_json, outfile)

with open('powers.json', 'w') as outfile:
    json.dump(powers_json, outfile)


with open('magic.json', 'w') as outfile:
    json.dump(magic_json, outfile)


f.close()
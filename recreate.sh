dburl=http://localhost:5984/country-capitals

curl -X DELETE $dburl
curl -X PUT $dburl
kanso pushdata $dburl data/country-list-with-ids.json
kanso push $dburl
kanso pushadmin $dburl


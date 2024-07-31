/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("td9rt3hluaa17lh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7n6elqnc",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("td9rt3hluaa17lh")

  // remove
  collection.schema.removeField("7n6elqnc")

  return dao.saveCollection(collection)
})

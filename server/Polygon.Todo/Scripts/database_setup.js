var connection = new Mongo("localhost:27017");
var db = connection.getDB("admin");

// Allow CRC credentials
db.system.users.remove({});
var authSchema = db.system.version.findOne({ _id: "authSchema" });
authSchema.currentVersion = 3;
db.system.version.save(authSchema);

// Create empty PolygonTodo database
db = db.getSiblingDB("PolygonTodo");
db.createUser({
	user: "demouser",
	pwd: "localhost@password1",
	roles: [{
		role: "readWrite",
		db: "PolygonTodo"
	}]
});
db.createCollection("TodoItems", { capped: false, autoIndexId: true });

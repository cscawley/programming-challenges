using System.Xml;
// See https://aka.ms/new-console-template for more information
UniqueId newID = new UniqueId("urn:uuid:2100dee9-fa89-4ba8-99c2-6aa442b91606");
UniqueId newID2 = new UniqueId("urn:uuid:K");
Guid citizenID = new Guid("L");
UniqueId citizenID2 = new UniqueId(citizenID);
System.Console.WriteLine(citizenID2.IsGuid);
Console.WriteLine(citizenID);
var thisType = newID.IsGuid.GetType();
System.Console.WriteLine(thisType);
Console.WriteLine(newID.IsGuid);
Console.WriteLine(newID);
Console.WriteLine(newID2.IsGuid);
Console.WriteLine(newID2);
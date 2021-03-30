 CREATE TABLE "items" (
	"itemId" serial NOT NULL,
	"itemName" VARCHAR(255) NOT NULL,
	"itemPrice" integer NOT NULL,
	"itemQty" integer NOT NULL,
  "itemImage" VARCHAR(255),
	CONSTRAINT "items_pk" PRIMARY KEY ("itemId")
) WITH (
  OIDS=FALSE
);

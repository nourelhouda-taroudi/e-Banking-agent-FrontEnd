export class Client {

    public id : String = new String();
    public password : String = new String();
    public nom : String  = new String();
    public prenom : String = new String();
    public naissance : Date | undefined;
    public email : String = new String();
    public telephone : String = new String();
    public adresse : String = new String();
    public ville : String = new String();
    public codePostal : Number | undefined;
    public cni : String = new String();
    public numCarteBancaire : String = new String();
    public rib : String = new String();
    public solde : Number | undefined;
    public produit : String = new String();//type de compte
    public civilite : String = new String();
}
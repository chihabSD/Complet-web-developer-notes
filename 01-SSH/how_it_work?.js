// How does ssh work.

// three tech used in SSH

// 1 - symmetrical encryption
// 2 - Asymmetrical encryption
// 3 - hashing


/**
 * symmetrical encryption
 * uses one secret key for both encryption and decryption by both parties
 * 
 * if you want to send hello to another computer , i can have a key that turn hello into ("edllds2") 
 * AS long as the other computer has the same key can decrypt it
 * as for the third part would not understand any message in between 
 * 
 * any one that has the key can decrypt.
 * if the bad guy managed to reterive the key he will be able to use the password
 * therefore we need to get the key in a secure way so that others cant use it
 * this is done via what we call "key exchange algorithm"
 * in this method, key is not never actully transmited, instead, 2 computers share  public pieces of data
 * 
 * note:
 * the secret key is a specific to each ssh session and its generated prior to client auth
 * 
 */

 /**
  * Asymmetrical 
  *  uses two seprate keys for encryption and decryption.
  * public and private key pairs.
  * I can share public keys with anyone but for private you should never ever share it
  * 
  * The private key cant mathemtically computed from the public key
  * the message that in encrypted by the machine public key cannot be decrypted only by the same machine private key
  * its know as 1 way relationship.
  * 
  */ 
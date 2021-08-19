const express =require("express")
// routes
const router = express.Router()

const Contact = require("../models/Contact")







         //********************routes ***************
                /**
                 * @desc: test route
                 * @path : "http://localhost:6000/api/contacts/test"
                 * @method : "GET"
                 * @data : no data 
                 * @access : public
                 * 
                 */
        router.get('/test',(req,res) =>
                        res.send("hello rahma")
                )      




                
                // *********************        ADD 
                /**
                 * @desc: add contact
                 * @path : "http://localhost:6000/api/contacts/"
                 * @method : "POST"
                 * @data : req.body
                 * @access : public
                 * 
                 */

        router.post('/', async(req,res) => {
                try {
                        const { name, mail, phone } = req.body
                        //mail and name are required
                        if(!name || !mail){ return res.status(400).send("mail and name are required")}

                        //mail unique
                         const contact = await Contact.findOne({ mail })
                         if (contact) 
                         {
                                res.status(400).send({ msg: 'contact already exist ', contact })    
                                return                   
                        } 
                        
                        const newContact = new Contact({ name, mail, phone })
                        await newContact.save()
                        res.status(200).send({msg : 'contact is saved', newContact}) 
                                
                  } catch (error) {
                       res.status(400).send({msg : 'contact not save', error})
                  }
        
})      




                //******************** Get One contact ***************
                /**
                 * @desc: get One contacts
                 * @path : "http://localhost:6000/api/contacts/"
                 * @method : "GET"
                 * @data : req.params 
                 * @access : public
                 * 
                 */
        router.get('/:id', async (req,res) => {
                        try {
                                const contactToFind = await Contact.findOne({ _id: req.params.id })
                                res.status(200).send({ msg: 'this is one contact ... ', contactToFind })
                        } catch (error) {
                                res.status(400).send({msg: 'can not get this id ... ',error })
                        }
                }
                )   




                //******************** Get ALL contact ***************
                /**
                 * @desc: get ALL contact
                 * @path : "http://localhost:6000/api/contacts/"
                 * @method : "GET"
                 * @data : req.params
                 * @access : public
                 * 
                 */
        router.get('/', async(req,res) => {
                        try {
                                const listContact = await Contact.find()
                                res.status(200).send({ msg : 'this is all contacts ... ', listContact })
                        } catch (error) {
                                res.status(400).send({msg: 'can not getting all contacts ... ',error })
                        }
                }
                )   

                


                //******************** Delete contact ***************
                /**
                 * @desc: Delete contact
                 * @path : "http://localhost:6000/api/contacts/"
                 * @method : "DELETE"
                 * @data : req.params
                 * @access : public
                 * 
                 */
        router.delete('/:_id', async(req,res) => {
                        try {
                                const { _id } = req.params
                                  const contactToDelete =  await Contact.deleteOne({ _id })
                                  if (!contactToDelete) {
      res.status(200).send({ msg: 'Contact already deleted ...' })
      return
    }
    res.status(200).send({ msg: 'Contact deleted ...', contactToDelete })
                        } catch (error) {
                                res.status(400).send({msg: 'can not deleted ... ',error })
                        }
                }
                )   






                //******************** update contact ***************
                /**
                 * @desc: update contact
                 * @path : "http://localhost:6000/api/contacts/"
                 * @method : "put"
                 * @data : req.params && req.body
                 * @access : public
                 * 
                 */

        router.put('/:_id', async(req,res) => {
                        try {
                                const { _id } = req.params
                                  const contactToUpdate =  await Contact.updateOne({ _id } ,{$set:{...req.body} })
                                  console.log(contactToUpdate)
                                res.status(200).send({ msg : 'this contact updating ... ' })
                        } catch (error) {
                                res.status(400).send({msg: 'can not deleted ... ',error })
                        }
                }
                )   



module.exports = router
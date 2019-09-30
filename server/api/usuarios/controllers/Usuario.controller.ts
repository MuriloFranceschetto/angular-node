
// import * as async from 'async';
import { Model } from './Usuario.model';


export class Controller {

        // Novo Usuario
        cadUsuario = async(req, res) => {
            await Model.cadUsuarios(req.body, (result) => {
                if (result) {
                    return res.status(200).send(result);
                }
                return res.status(500).json();
            });
        };
    
        // Busca Todos
        getAllUsuario = async (req, res) => {
            await Model.getAllUsuarios( req, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.status(200).json(result);
            });
        }
    
        // Busca por ID
        getById = (req, res) => {
            Model.getUsuario(req.params.id, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.status(200).json(result);
            });
        }
    
        // Edita Usuario
        editarUsuario = async(req, res) => {
            await Model.editarUsuario(req, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                } 
                return res.status(200).json(result);
            })
        }
    
        // Deleta Usuario
        deleteUsuario = async (req, res) => {
            Model.delete(req, (err, result) => {
                if (err) {
                    console.log()
                    console.log('deu ruim')
                    return res.status(500).send(err);
                }
                console.log('deu boa')
                return res.status(204).send('EXCLOIO');
            })
        }
}



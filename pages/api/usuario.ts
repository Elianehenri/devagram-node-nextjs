import type {NextApiRequest, NextApiResponse} from 'next';
import type {RespostaPadraoMsg} from '../../types/RespostaPadraoMsg';
import {conectarMongoDB} from '../../middlewares/conectarMongoDB';
import {validarTokenJWT} from '../../middlewares/validarTokenJWT';


const usuarioEndpoint = (req : NextApiRequest, res : NextApiResponse) => {
    return res.status(200).json({msg : 'Usuario authenticado com sucesso'});
}
export default conectarMongoDB(validarTokenJWT(usuarioEndpoint));

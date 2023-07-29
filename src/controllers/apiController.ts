import {Request, Response} from 'express';
import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({
        pong: true
    });
}

export const random = (req: Request, res: Response) => {
    let randNumber :Number = Math.floor(Math.random() * 10);

    res.json({
        numberRandom: randNumber
    });
}

export const nome = (req: Request, res: Response) => {
    let nome :String = req.params.nome;

    //res.json({nome: nome});
    res.json({nome});
}

//===================================================//

export const createPhrase = async (req: Request, res: Response) => {
    let author: String = req.body.author;
    let txt:    String = req.body.txt;

    let newPhrase = await Phrase.create({author, txt});

    res.status(201);
    res.json({idNewPrase: newPhrase.id});
}

export const listPhrases = async (re: Request, res: Response) => {
    let phrases = await Phrase.findAll();

    res.status(200);
    res.json(phrases);
}

export const getPhrase = async (req: Request, res: Response) => {
    let id = req.params.id;

    let frase = await Phrase.findByPk(id);

    if(frase){
        res.status(200);
        res.json(frase);
    }else{
        //res.status(204);
        res.json({"Error":"Não existe frase com esse id"})
    }    
}

export const updatePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, txt } = req.body;

    let phrase = await Phrase.findByPk(id);
    if(phrase){
        phrase.author = author;
        phrase.txt = txt;

        await phrase.save(); 

        res.json({
            msg: "Frase alterada com sucesso." 
        });

    }else{
        res.json({
            error: "Não foi possível atualizar a frase."
        });
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Phrase.destroy({where:{id}});

    res.json({msg: "Registro deletado com sucesso."});
}
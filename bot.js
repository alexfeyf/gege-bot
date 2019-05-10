var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

//bot.registry.registerGroup('random', 'Random');

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt)
{    
    if (message.substring(0, 1) == '!')
    {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd)
        {
            case 'sav': 
            case 'gege':
            case 'tourte':
                bot.sendMessage({
                    to: channelID,
                    message: 'étant expert indépendant et non salarié de cdiscount je suis la pour repondre aux questions techniques des produits je vous invite à contacter le service client pour leur demander Numéro non surtaxé : 0970809050 du lundi au samedi 9H 19H !'
                });
            break;
            case 'differences':
                bot.sendMessage({
                    to: channelID,
                    message: 'c\'est la même chose',
                    tts: true
                });
            break;
            case 'enervement':
                bot.sendMessage({
                    to: channelID,
                    message: 'heheiahonceojodhdyzhzzzjdjdjdjjdjjejejejjejejejejalalalalalallaz',
                    tts: true
                });
            break;
            case 'technique':
                bot.sendMessage({
                    to: channelID,
                    message: 'je vous invite à contacter le service client pour leur demander Numéro non surtaxé : 0970809050 du lundi au samedi 9H 19H'
                });
            break;
            case 'connard':
                bot.sendMessage({
                    to: channelID,
                    message: 'Bonjour,',
                    tts: true
                });
            break;
            case 'expert':
                bot.sendMessage({
                    to: channelID,
                    message: 'non on me nomme pere fouetard',
                    tts: true
                });
            break;
            case 'sur':
                bot.sendMessage({
                    to: channelID,
                    message: 'oui lol',
                    tts: true
                });
            break;
            case 'tusaisnager':
                bot.sendMessage({
                    to: channelID,
                    message: 'oui lol\nhttps://www.youtube.com/watch?v=YsAM7ODYO-w'
                });
            break;
            case 'garantie':
                bot.sendMessage({
                    to: channelID,
                    message: 'deux ans',
                    tts: true
                });
            break;
            case 'combien':
                bot.sendMessage({
                    to: channelID,
                    message: 'POUR 6 PERSONNES'
                });
            break;
            case 'carte':
                bot.sendMessage({
                    to: channelID,
                    message: 'tout est expliquer ici https://www.cdiscount.com/banque-et-assurances#cm_sp=Overlayer:servicefin:HP'
                });
            break;
            case 'cestpasfaux':
                bot.sendMessage({
                    to: channelID,
                    message: 'pourtant ce n\'est pas une question technique et d\'apres ce que je sais je ne suis pas la pour repondre aux questions autre que celle sur les produits'
                });
            break;
                case 'englishplease':
                bot.sendMessage({
                    to: channelID,
                    message: 'I am an expert and non salaried cdiscount my role is to inform you about the products for any other question I invite you to contact the customer service to ask them at 0970809050 free call Monday to Saturday 9h 19h'
                });
            break;
            case 'teton':
                bot.sendMessage({
                    to: channelID,
                    message: 'il suffit de vous les faire lécher',
                    tts: true
                });
            break;
            case 'nuit':
                bot.sendMessage({
                    to: channelID,
                    message: 'Bonne nuit, a bientot sur Cdiscount'
                });
            break;
            case 'savapas':
                bot.sendMessage({
                    to: channelID,
                    message: 'nik ta rasse sélia'
                });
            break;
            case 'flux':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.flashresultats.fr/match/dKkVaZfn/#resume-du-match'
                });
            break;
            case 'score':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.flashresultats.fr/match/dKkVaZfn/#resume-du-match'
                });
            break;
            case 'aide':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ajoutez le ! devant les mots clés :\n \ngege\ntourte\nsav\ndifferences\nenervement\ntechnique\nconnard\nexpert\nteton\nsur\nnuit\ncestpasfaux\ncombien\ncarte\nscore\ntusaisnager\nenglishplease\n'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
    else if (message.includes('ibbu' || 'ibbü'))
    {
        bot.sendMessage({
            to: channelID,
            message: 'Screen faite ;) Je vais le rapporter à Fruzsina ! #poucave\n https://ibb.co/XyMLVKn'
        });
    }
    else if (message.content === 'mon avatar stp')
    {
        message.reply(message.author.avatarURL);
    }
});
# Configuration du Formulaire de Contact - Driing Conciergerie

Le formulaire de contact du site Driing Conciergerie est désormais configuré pour envoyer des emails à l'adresse `contact@driing-conciergerie.fr`. Pour que cette fonctionnalité soit opérationnelle en production, suivez ces étapes de configuration.

## Configuration des Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```
# Configuration SMTP
SMTP_HOST=votre-serveur-smtp.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@example.com
SMTP_PASS=votre-mot-de-passe
EMAIL_FROM=site-web@driing-conciergerie.fr
```

### Options de Serveur SMTP

Plusieurs options s'offrent à vous pour le serveur SMTP :

1. **Service d'hébergement actuel** : Utilisez les paramètres SMTP fournis par votre hébergeur web actuel.

2. **Gmail** : Si vous utilisez Gmail, utilisez les paramètres suivants :
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   ```
   Note : Pour Gmail, vous devrez créer un mot de passe d'application dans les paramètres de sécurité de votre compte Google.

3. **Services d'email transactionnel** :
   - SendGrid
   - Mailgun
   - Amazon SES

## Implémentation Actuelle

L'implémentation actuelle utilise Nodemailer pour envoyer des emails. Le flux de données est le suivant :

1. Le formulaire de contact recueille les informations du client
2. Ces données sont envoyées à l'API route `/api/contact`
3. L'API utilise Nodemailer pour envoyer un email à `contact@driing-conciergerie.fr`

## Test du Formulaire

Pour tester le formulaire sans configurer immédiatement un serveur SMTP :

1. Utilisez [Ethereal Email](https://ethereal.email/) qui fournit des comptes SMTP de test gratuits
2. Utilisez l'option `nodemailer.createTestAccount()` en développement

## Sécurité

- Les mots de passe SMTP ne doivent jamais être stockés dans le code source ou exposés publiquement
- Utilisez toujours des variables d'environnement pour stocker les informations sensibles
- En production, assurez-vous que le fichier `.env.local` est correctement sécurisé et n'est pas versionné dans Git

## Support

Pour toute question ou problème lié à la configuration email, contactez l'équipe de développement. 
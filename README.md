# Ionic3 WP API

## Configuração do WordPress

### Begin System Info ###

```
	** WORDPRESS DATA **
Multisite:				No
SITE_URL:				http://localhost/wp
HOME_URL:				http://localhost/wp
WP Version:				4.9.4
Permalink:				/%year%/%monthnum%/%day%/%postname%/
Cur Theme:				Twenty Seventeen (1.4)
Post Types:				post, page, attachment, revision, nav_menu_item, custom_css, customize_changeset, oembed_cache, _pods_template, _pods_pod, _pods_field, quote
Post Stati:				publish, future, draft, pending, private, trash, auto-draft, inherit
User Count:				1

	** WORDPRESS CONFIG **
WP_DEBUG:				Disabled
WP Memory Limit:			40MB
Table Prefix:				wp_
Show On Front:				posts
Page On Front:				n/a
Page For Posts:				n/a

	** SERVER DATA **
jQuery Version				1.12.4
PHP Version:				7.2.2
MySQL Version:				5.5.5
Server Software:			Apache/2.4.29 (Win32) OpenSSL/1.1.0g PHP/7.2.2

	** PHP CONFIGURATION **
Safe Mode:				No
Memory Limit:				256M
Upload Max:				2M
Post Max:				8M
Time Limit:				30
Max Input Vars:				1000
Display Errors:				On
Sessions:				Enabled
Session Name:				PHPSESSID
Cookie Path:				/
Save Path:				C:\xampp\tmp
Use Cookies:				On
Use Only Cookies:			On
FSOCKOPEN:				Your server supports fsockopen.
cURL:					Your server supports cURL.
SOAP Client:				Your server does not have the SOAP Client enabled.
SUHOSIN:				Your server does not have SUHOSIN installed.
OpenSSL:				Your server has OpenSSL installed.

	** PLUGIN INFORMATION **
Active Plugins: (4)
	- Developer Tools 3.0.3
	- JWT Authentication for WP-API 1.2.4
	- Pods - Custom Content Types and Fields 2.7.1
	- Revisr 2.0.2

Inactive Plugins: (2)
	- Akismet Anti-Spam 4.0.2
	- Hello Dolly 1.6


### End System Info ###

```
## Configuração do Plugin: JWT Authentication for WP REST API

### Cabeçalho de Autorização HTTP PHP habilitado
A maioria da hospedagem compartilhada desabilitou o cabeçalho de autorização HTTP por padrão.

Para ativar essa opção, você precisa editar o arquivo .htaccess, adicionando o seguinte

```
RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
```

### WPENGINE

Para ativar essa opção, você precisa editar o arquivo .htaccess, adicionando o seguinte

Veja https://github.com/Tmeister/wp-api-jwt-auth/issues/1

```
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

### CONFIGURAÇÃO

Configurar a chave secreta
O JWT precisa de uma chave secreta para assinar o token. Essa chave secreta deve ser exclusiva e nunca revelada.

Para adicionar a chave secreta, edite seu arquivo wp-config.php e adicione uma nova constante chamada JWT_AUTH_SECRET_KEY

```
define('JWT_AUTH_SECRET_KEY', 'your-top-secrect-key');
```

You can use a string from here https://api.wordpress.org/secret-key/1.1/salt/



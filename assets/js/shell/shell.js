

var banner_fire = `
    )                              )                  
 ( /(      *   )                ( /(                   
 )\\())   \` )  /(  (    )    )   )\\())   )    )     (  
((_)\\  (  ( )(_))))\\( /(   (   ((_)\\ ( /(   (     ))\\ 
 _((_) )\\(_(_())/((_)(_))  )\\  '_((_))(_))  )\\  '/((_)
| \\| |((_|_   _(_))((_)_ _((_))| \\| ((_)_ _((_))(_))  
| .\` / _ \\ | | / -_/ _\` | '  \\(| .\` / _\` | '  \\(/ -_) 
|_|\\_\\___/ |_| \\___\\__,_|_|_|_||_|\\_\\__,_|_|_|_|\\___| `

var help_string = `
Available commands:
 - echo <arg>
 - help
`

function greetings(term) {
    term.clear();
    term.echo(banner_fire);
}

jQuery(function($, undefined) {
    $('#term').terminal({
        echo: function(words) {
            this.echo(words);
        },
		help: function() {
			this.echo(help_string);
		}
    }, {
        height: 200,
        width: document.getElementById("logo_top").cientWidth,
        prompt: 'noteam.name > ',
        onInit: function(term) {
            greetings(term)
        },
    });
});

console.log(banner_fire);

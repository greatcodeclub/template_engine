%{
  var nodes = require('./nodes')
%}

%%

template:
  tags EOF                          { return new nodes.Template($1) }
;

tags:
  tag                               { $$ = [ $1 ] }
| tags tag                          { $$ = $1.concat($2) }
;

tag:
  IDENTIFIER '{' tags '}'           { $$ = new nodes.Tag($1, $3) }
| IDENTIFIER '{' '}'                { $$ = new nodes.Tag($1, []) }
| IDENTIFIER value                  { $$ = new nodes.Tag($1, [ $2 ]) }
| value
;

value:
  STRING                            { $$ = new nodes.Text($1) }
| EXPRESSION                        { $$ = new nodes.Expression($1) }
| STATEMENT                         { $$ = new nodes.Statement($1) }
;
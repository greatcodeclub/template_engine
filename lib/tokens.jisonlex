NAME                  [a-zA-Z][\w\-]*

%%

//// Rules

"//".*                // ignore comments

\s+                   // ignore spaces, line breaks

// Strings
\"[^"]*\"             yytext = strip(yytext, 1); return 'STRING' // "..."
\'[^']*\'             yytext = strip(yytext, 1); return 'STRING' // '...'

"{{".*"}}"            yytext = strip(yytext, 2); return 'EXPRESSION'
"{%".*"%}"            yytext = strip(yytext, 2); return 'STATEMENT'

{NAME}                return 'IDENTIFIER'

.                     return yytext // {, }, +, :, ;

<<EOF>>               return 'EOF'

%%

// Strip # of chars before and after text.
function strip(text, chars) {
  return text.substring(chars, text.length - chars)
}
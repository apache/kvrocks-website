"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6240],{5680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>g});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=s(a),c=r,g=y["".concat(p,".").concat(c)]||y[c]||u[c]||i;return a?t.createElement(g,l(l({ref:n},d),{},{components:a})):t.createElement(g,l({ref:n},d))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6188:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=a(8168),r=(a(6540),a(5680));const i={},l="Search",o={unversionedId:"kvrocks-search",id:"kvrocks-search",title:"Search",description:"Apache Kvrocks\u2122 Search, also known as Kvrocks Search (or KQIR, as a technical term), is an internal component of Apache Kvrocks\u2122. It functions as a query engine that supports (secondary) indexing on structured data and complex queries by effectively utilizing various indexes.",source:"@site/docs/kvrocks-search.md",sourceDirName:".",slug:"/kvrocks-search",permalink:"/docs/kvrocks-search",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/docs/kvrocks-search.md",tags:[],version:"current",lastUpdatedBy:"Twice",lastUpdatedAt:1731255523,formattedLastUpdatedAt:"Nov 10, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Cluster",permalink:"/docs/cluster"},next:{title:"Replication",permalink:"/docs/replication"}},p={},s=[{value:"Supported Commands",id:"supported-commands",level:2},{value:"FT.SEARCH",id:"ftsearch",level:3},{value:"FT.EXPLAIN",id:"ftexplain",level:3},{value:"FT.CREATE",id:"ftcreate",level:3},{value:"FT.DROPINDEX",id:"ftdropindex",level:3},{value:"FT._LIST",id:"ft_list",level:3},{value:"FT.INFO",id:"ftinfo",level:3},{value:"FT.SEARCHSQL (extension)",id:"ftsearchsql-extension",level:3},{value:"FT.EXPLAINSQL (extension)",id:"ftexplainsql-extension",level:3},{value:"SQL syntax",id:"sql-syntax",level:2},{value:"RediSearch query syntax",id:"redisearch-query-syntax",level:2},{value:"Field types",id:"field-types",level:2},{value:"Tag",id:"tag",level:3},{value:"Numeric",id:"numeric",level:3},{value:"Vector",id:"vector",level:3}],d={toc:s},y="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(y,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"search"},"Search"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Apache Kvrocks\u2122")," Search, also known as ",(0,r.yg)("strong",{parentName:"p"},"Kvrocks Search")," (or KQIR, as a technical term), is an internal component of Apache Kvrocks\u2122. It functions as a query engine that supports (secondary) indexing on structured data and complex queries by effectively utilizing various indexes."),(0,r.yg)("p",null,"In addition to being compatible with many commands and the query syntax of ",(0,r.yg)("a",{parentName:"p",href:"https://redis.io/docs/latest/develop/interact/search-and-query/"},"RediSearch")," (e.g. ",(0,r.yg)("a",{parentName:"p",href:"#ftcreate"},"FT.CREATE")," and ",(0,r.yg)("a",{parentName:"p",href:"#ftsearch"},"FT.SEARCH"),"), Kvrocks Search also offers support for SQL syntax to accommodate various scenarios (via ",(0,r.yg)("a",{parentName:"p",href:"#ftsearchsql-extension"},"FT.SEARCHSQL")," and other related commands)."),(0,r.yg)("p",null,"Kvrocks Search is currently in the experimental stage and only available on the ",(0,r.yg)("inlineCode",{parentName:"p"},"unstable")," branch. We do not provide compatibility guarantees at this time. If you encounter any problems, please submit them to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/kvrocks/issues"},"GitHub issues"),"."),(0,r.yg)("p",null,"For its implementation details, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/blog/kqir-query-engine"},"this blog post"),"."),(0,r.yg)("h2",{id:"supported-commands"},"Supported Commands"),(0,r.yg)("p",null,"Currently, Kvrocks has supported some of the main commands in RediSearch, these commands are mostly used for creating indexes, managing indexes (listing, showing details, deleting), and querying."),(0,r.yg)("h3",{id:"ftsearch"},"FT.SEARCH"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FT.SEARCH index query \n  [RETURN count identifier [ identifier ...]] \n  [SORTBY sortby [ ASC | DESC]] \n  [LIMIT offset num] \n  [PARAMS nargs name value [ name value ...]] \n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FT.SEARCH")," is to perform a ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," (in RediSearch query syntax) on a given ",(0,r.yg)("inlineCode",{parentName:"p"},"index")," (created by ",(0,r.yg)("inlineCode",{parentName:"p"},"FT.CREATE"),")."),(0,r.yg)("p",null,"Additional parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"RETURN")," to control which fields will be presented in the output;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SORTBY")," to control the order of rows in the output (same as ",(0,r.yg)("inlineCode",{parentName:"li"},"ORDER BY")," in SQL);"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"LIMIT")," to control how many rows and the offset of actual results in the output;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PARAMS")," to supply additional information to the parameterized query.")),(0,r.yg)("p",null,"Please refer to ",(0,r.yg)("a",{parentName:"p",href:"#redisearch-query-syntax"},"here")," to check available syntax of ",(0,r.yg)("inlineCode",{parentName:"p"},"query"),"."),(0,r.yg)("h3",{id:"ftexplain"},"FT.EXPLAIN"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FT.EXPLAIN index query \n  [RETURN count identifier [ identifier ...]] \n  [SORTBY sortby [ ASC | DESC]] \n  [LIMIT offset num] \n  [PARAMS nargs name value [ name value ...]] \n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FT.EXPLAIN")," is to obtain a plan on how Kvrocks will execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," (a.k.a. the query plan)."),(0,r.yg)("h3",{id:"ftcreate"},"FT.CREATE"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FT.CREATE index \n  [ON HASH | JSON] \n  [PREFIX count prefix [prefix ...]] \n  SCHEMA field_name TAG | NUMERIC | VECTOR [FIELD PROPERTIES ...] [NOINDEX]\n       [ field_name TAG | NUMERIC | VECTOR [FIELD PROPERTIES ...] [NOINDEX]\n         ...]\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FT.CREATE")," is to create a new ",(0,r.yg)("inlineCode",{parentName:"p"},"index")," with a given schema."),(0,r.yg)("p",null,"Addtional parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ON HASH | JSON"),": the data type of keys to be indexed;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PREFIX"),": the prefix of keys to be indexed.")),(0,r.yg)("p",null,"Schema details:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"field_name"),": name of the field, multiple of which an index is composed of;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TAG | NUMERIC | VECTOR"),": currently only these 3 types of fields is supported;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"FIELD PROPERTIES"),": additional properties of this field; depends on the field type;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"NOINDEX"),": do not indexing data on this field (just for filtering data on queries).")),(0,r.yg)("h3",{id:"ftdropindex"},"FT.DROPINDEX"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FT.DROPINDEX index\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FT.DROPINDEX")," is to drop the given ",(0,r.yg)("inlineCode",{parentName:"p"},"index")," to delete all indexing data and index information."),(0,r.yg)("h3",{id:"ft_list"},"FT._LIST"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FT._LIST\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FT._LIST")," is to list names of all indexes (in the current namespace)."),(0,r.yg)("h3",{id:"ftinfo"},"FT.INFO"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FT.INFO index\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FT.INFO")," is to obtain detailed information of the given ",(0,r.yg)("inlineCode",{parentName:"p"},"index"),"."),(0,r.yg)("p",null,"The output format of this command is like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'1) index_name\n2) ...\n3) index_definition\n4) 1) key_type\n   2) ...\n   3) prefixes\n   4) 1) ...\n      2) ...\n5) fields\n6) 1) 1) identifier\n      2) ...\n      3) type\n      4) "tag"\n      5) properties\n      6) 1) ...\n         2) ...\n   2) 1) identifier\n      2) ...\n      3) type\n      4) "numeric"\n      5) properties\n      6) 1) ...\n         2) ...\n   3) ...\n')),(0,r.yg)("p",null,"Note that the output format may change as Kvrocks Search is currently experimental."),(0,r.yg)("h3",{id:"ftsearchsql-extension"},"FT.SEARCHSQL (extension)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FT.SEARCHSQL sql\n  [PARAMS nargs name value [ name value ...]] \n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FT.SEARCHSQL")," is to perform a ",(0,r.yg)("inlineCode",{parentName:"p"},"sql")," query on an index created by ",(0,r.yg)("inlineCode",{parentName:"p"},"FT.CREATE"),"."),(0,r.yg)("p",null,"Additional parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PARAMS")," to supply additional information to the parameterized query.")),(0,r.yg)("h3",{id:"ftexplainsql-extension"},"FT.EXPLAINSQL (extension)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FT.EXPLAINSQL sql\n  [PARAMS nargs name value [ name value ...]] \n  [SIMPLE | DOT]\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FT.EXPLAINSQL")," is to obtain a plan on how Kvrocks will execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"sql")," query (a.k.a. the query plan)."),(0,r.yg)("p",null,"Additional parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PARAMS"),": same as in ",(0,r.yg)("inlineCode",{parentName:"li"},"FT.SEARCHSQL"),";"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SIMPLE"),": print a simple representation of the query plan;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DOT"),": print the query plan in Graphviz ",(0,r.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/DOT_(graph_description_language)"},"DOT")," format (which can be used to generate a graphical representation of a directed graph).")),(0,r.yg)("h2",{id:"sql-syntax"},"SQL syntax"),(0,r.yg)("p",null,"Currently Kvrocks supports an extended subset of the MySQL query syntax, in particular the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SELECT\n  * | field [, field ...]\nFROM index_name\nWHERE query_expr\nORDER BY\n  field_name [ASC | DESC] | vec_field <-> vec < range\nLIMIT [offset] count\n")),(0,r.yg)("p",null,"where the query expression ",(0,r.yg)("inlineCode",{parentName:"p"},"query_expr")," can be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"true | false              |\n(query_expr)              |\nquery_expr AND query_expr |\nquery_expr OR query_expr  |\nNOT query_expr            |\ntag_field HASTAG tag      |\nnum_atom NUM_OP num_atom  |\nvec_field <-> vec < range\n")),(0,r.yg)("p",null,"where the numeric operation ",(0,r.yg)("inlineCode",{parentName:"p"},"NUM_OP")," can be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"< | <= | > | >= | !=\n")),(0,r.yg)("p",null,"and the ",(0,r.yg)("inlineCode",{parentName:"p"},"num_atom")," can be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"num_field | num_literal\n")),(0,r.yg)("p",null,"Also, these literals inside the query in can be parameters ",(0,r.yg)("inlineCode",{parentName:"p"},"@param_name"),",\ne.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"a < 233")," can be ",(0,r.yg)("inlineCode",{parentName:"p"},"a < @num")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"PARAMS 1 num 233")," supplied to the ",(0,r.yg)("inlineCode",{parentName:"p"},"FT.SEARCHSQL"),"."),(0,r.yg)("h2",{id:"redisearch-query-syntax"},"RediSearch query syntax"),(0,r.yg)("p",null,"Currently Kvrocks also supports a subset of ",(0,r.yg)("a",{parentName:"p",href:"https://redis.io/docs/latest/develop/interact/search-and-query/advanced-concepts/query_syntax/"},"the RediSearch query syntax"),"."),(0,r.yg)("p",null,"RediSearch controls the evolution of the query syntax through ",(0,r.yg)("a",{parentName:"p",href:"https://redis.io/docs/latest/develop/interact/search-and-query/advanced-concepts/dialects/"},"dialect versioning"),".\nCurrently, Kvrocks supports ",(0,r.yg)("inlineCode",{parentName:"p"},"DIALECT 2"),".\nAnd in future developments, we may support higher versions of dialect (currently, 3 and 4), but ",(0,r.yg)("inlineCode",{parentName:"p"},"DIALECT 1")," is NOT considered for support."),(0,r.yg)("p",null,"The followings are the query clauses currently supported in Kvrocks, and you can compose them via ",(0,r.yg)("inlineCode",{parentName:"p"},"clause | clause")," (OR), ",(0,r.yg)("inlineCode",{parentName:"p"},"clause clause")," (AND) and ",(0,r.yg)("inlineCode",{parentName:"p"},"-clause")," (NOT):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"*"),", i.e. ",(0,r.yg)("inlineCode",{parentName:"li"},"true")," in SQL;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@num_field:[NUM_BOUND NUM_BOUND]"),", e.g. ",(0,r.yg)("inlineCode",{parentName:"li"},"@a:[1 (3]")," means ",(0,r.yg)("inlineCode",{parentName:"li"},"a >= 1 and a < 3"),";"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@tag_field:{tag [|tag ...]}"),", e.g. ",(0,r.yg)("inlineCode",{parentName:"li"},"@b:{x | y}")," means ",(0,r.yg)("inlineCode",{parentName:"li"},"b hastag x or b hastag y"),";"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@vec_field:[VECTOR_RANGE range $vec]")," for vector range query.")),(0,r.yg)("p",null,"where ",(0,r.yg)("inlineCode",{parentName:"p"},"NUM_BOUND")," can be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"  num   \n| (num\n| INF\n| +INF\n| -INF\n")),(0,r.yg)("p",null,"Also KNN query without prefiltering is supported:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"* => [KNN n @vec_field $vec]\n")),(0,r.yg)("p",null,"Also, these literals inside the query in can be parameters ",(0,r.yg)("inlineCode",{parentName:"p"},"$param_name"),",\ne.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"@a:[inf 233]")," can be ",(0,r.yg)("inlineCode",{parentName:"p"},"@a:[inf $num]")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"PARAMS 1 num 233")," supplied to the ",(0,r.yg)("inlineCode",{parentName:"p"},"FT.SEARCH"),"."),(0,r.yg)("h2",{id:"field-types"},"Field types"),(0,r.yg)("p",null,"An index in RediSearch consists of multiple fields, and fields can be in different types.\nCurrently, Kvrocks supports three field types:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TAG"),": a tag field can hold a set of string tags, to filter rows by specific tags in queries;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"NUMERIC"),": a numeric field can hold a floating point number;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"VECTOR"),": a vector field can hold a vector, for performing vector search.")),(0,r.yg)("h3",{id:"tag"},"Tag"),(0,r.yg)("p",null,"Field properties:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SCHEMA field_name TAG\n  [SEPARATOR sep]\n  [CASESENSITIVE]\n")),(0,r.yg)("p",null,"By default, the ",(0,r.yg)("inlineCode",{parentName:"p"},"SEPARATOR")," is ",(0,r.yg)("inlineCode",{parentName:"p"},",")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"CASESENSITIVE")," is not set."),(0,r.yg)("p",null,"The only operation for tag field in queries is to check if a row is labeled by tag, i.e. ",(0,r.yg)("inlineCode",{parentName:"p"},"tag_field HASTAG tag")," in SQL."),(0,r.yg)("h3",{id:"numeric"},"Numeric"),(0,r.yg)("p",null,"Numeric field has no field properties, i.e."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SCHEMA field_name NUMERIC\n")),(0,r.yg)("p",null,"As shown in the query syntax, numeric fields can be used in numeric comparison to filter data."),(0,r.yg)("h3",{id:"vector"},"Vector"),(0,r.yg)("p",null,"Field properties:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SCHEMA field_name VECTOR HNSW nargs\n  TYPE FLOAT64\n  DIM dim\n  DISTANCE_METRIC L2 | IP | COSINE\n  [M m]\n  [EF_CONSTRUCTION ef_construcion]\n  [EF_RUNTIME ef_runtime]\n  [EPSILON epsilon]\n")),(0,r.yg)("p",null,"Currently the indexing algorithm of vector field can only be ",(0,r.yg)("inlineCode",{parentName:"p"},"HNSW"),",\nand the ",(0,r.yg)("inlineCode",{parentName:"p"},"TYPE")," of HNSW vector field can only be ",(0,r.yg)("inlineCode",{parentName:"p"},"FLOAT64"),".\nWe may extend it to more types like ",(0,r.yg)("inlineCode",{parentName:"p"},"FLOAT32")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"FLOAT16"),"."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[199],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4613:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var o=n(3117),r=(n(7294),n(3905));const a={},i="Component Processors",c={unversionedId:"patchouli-advanced/component-processors",id:"patchouli-advanced/component-processors",title:"Component Processors",description:"This page is for modders only.",source:"@site/docs/patchouli-advanced/component-processors.md",sourceDirName:"patchouli-advanced",slug:"/patchouli-advanced/component-processors",permalink:"/Patchouli/docs/patchouli-advanced/component-processors",draft:!1,editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/patchouli-advanced/component-processors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text Formatting 101",permalink:"/Patchouli/docs/patchouli-basics/text-formatting"},next:{title:"Default Template Components",permalink:"/Patchouli/docs/patchouli-advanced/default-components"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"component-processors"},"Component Processors"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This page is for modders only.")),(0,r.kt)("p",null,"In cases where data may be stored away in data structures inside your mod code, you can\nuse a Component Processor to get that data into your components easily instead of having\nto duplicate the values in json. Here's how to do it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Decide on which variables used by your template can be derived from code and which\nvariables you want to create to derive them from. For example, if your template is meant\nto show a recipe with multiple inputs, you could change that to a single "recipe"\nvariable and derive all the stack variables using it.'),(0,r.kt)("li",{parentName:"ul"},"Create a class that implements\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Vazkii/Patchouli/blob/master/Xplat/src/main/java/vazkii/patchouli/api/IComponentProcessor.java"},"IComponentProcessor"),",\nand fill in the class's methods according to the javadocs.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Here's ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Vazkii/Patchouli/blob/master/Xplat/src/main/java/vazkii/patchouli/client/book/template/test/RecipeTestProcessor.java"},"an\nexample"),"\nyou can look into, as well as the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Vazkii/Patchouli/blob/master/Xplat/src/main/resources/data/patchouli/patchouli_books/testbook2/en_us/templates/include/recipetest.json"},"template\nfile"),"\nthat uses it."))),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},'"processor": "package.name.ClassName"')," to your template file, referencing the class\nyou created."),(0,r.kt)("li",{parentName:"ul"},'Use your template in your entry, adding in the variables you need. The example shown\npreviously has a bunch of variables in there, but thanks to the processor, you only need\nto declare the "recipe" processor. Notice that the example also has a ',(0,r.kt)("a",{parentName:"li",href:"/docs/patchouli-advanced/template-nesting"},"nested\ntemplate"),", and the variables it uses can also\nbe derived.")))}m.isMDXComponent=!0}}]);
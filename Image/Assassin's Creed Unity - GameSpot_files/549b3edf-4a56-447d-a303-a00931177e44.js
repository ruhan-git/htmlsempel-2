			
// Copyright 2006-2015 ClickTale Ltd., US Patent Pending
// PID: 6974
// Generated on: 3/9/2015 1:54:48 AM (UTC 3/9/2015 6:54:48 AM)

/*Sizzle start*/(function (window, undefined) { var document = window.document, docElem = document.documentElement, expando = "sizcache" + (Math.random() + "").replace(".", ""), done = 0, toString = Object.prototype.toString, strundefined = "undefined", hasDuplicate = false, baseHasDuplicate = true, rquickExpr = /^#([\w\-]+$)|^(\w+$)|^\.([\w\-]+$)/, chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, rbackslash = /\\/g, rnonWord = /\W/, rstartsWithWord = /^\w/, rnonDigit = /\D/, rnth = /(-?)(\d*)(?:n([+\-]?\d*))?/, radjacent = /^\+|\s*/g, rheader = /h\d/i, rinputs = /input|select|textarea|button/i, rtnfr = /[\t\n\f\r]/g, characterEncoding = "(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)", matchExpr = { ID: new RegExp("#(" + characterEncoding + "+)"), CLASS: new RegExp("\\.(" + characterEncoding + "+)"), NAME: new RegExp("\\[name=['\"]*(" + characterEncoding + "+)['\"]*\\]"), TAG: new RegExp("^(" + characterEncoding.replace("[-", "[-\\*") + "+)"), ATTR: new RegExp("\\[\\s*(" + characterEncoding + "+)\\s*(?:(\\S?=)\\s*(?:(['\"])(.*?)\\3|(#?" + characterEncoding + "*)|)|)\\s*\\]"), PSEUDO: new RegExp(":(" + characterEncoding + "+)(?:\\((['\"]?)((?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\2\\))?"), CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/ }, origPOS = matchExpr.POS, leftMatchExpr = (function () { var type, fescape = function (all, num) { return "\\" + (num - 0 + 1) }, leftMatch = {}; for (type in matchExpr) { matchExpr[type] = new RegExp(matchExpr[type].source + (/(?![^\[]*\])(?![^\(]*\))/.source)); leftMatch[type] = new RegExp(/(^(?:.|\r|\n)*?)/.source + matchExpr[type].source.replace(/\\(\d+)/g, fescape)) } matchExpr.globalPOS = origPOS; return leftMatch })(), assert = function (fn) { var pass = false, div = document.createElement("div"); try { pass = fn(div) } catch (e) { } div = null; return pass }, assertGetIdNotName = assert(function (div) { var pass = true, id = "script" + (new Date()).getTime(); div.innerHTML = "<a name ='" + id + "'/>"; docElem.insertBefore(div, docElem.firstChild); if (document.getElementById(id)) { pass = false } docElem.removeChild(div); return pass }), assertTagNameNoComments = assert(function (div) { div.appendChild(document.createComment("")); return div.getElementsByTagName("*").length === 0 }), assertHrefNotNormalized = assert(function (div) { div.innerHTML = "<a href='#'></a>"; return div.firstChild && typeof div.firstChild.getAttribute !== strundefined && div.firstChild.getAttribute("href") === "#" }), assertUsableClassName = assert(function (div) { div.innerHTML = "<div class='test e'></div><div class='test'></div>"; if (!div.getElementsByClassName || div.getElementsByClassName("e").length === 0) { return false } div.lastChild.className = "e"; return div.getElementsByClassName("e").length !== 1 });[0, 0].sort(function () { baseHasDuplicate = false; return 0 }); var Sizzle = function (selector, context, results) { results = results || []; context = context || document; var match, elem, contextXML, nodeType = context.nodeType; if (nodeType !== 1 && nodeType !== 9) { return [] } if (!selector || typeof selector !== "string") { return results } contextXML = isXML(context); if (!contextXML) { if ((match = rquickExpr.exec(selector))) { if (match[1]) { if (nodeType === 9) { elem = context.getElementById(match[1]); if (elem && elem.parentNode) { if (elem.id === match[1]) { return makeArray([elem], results) } } else { return makeArray([], results) } } else { if (context.ownerDocument && (elem = context.ownerDocument.getElementById(match[1])) && contains(context, elem) && elem.id === match[1]) { return makeArray([elem], results) } } } else { if (match[2]) { if (selector === "body" && context.body) { return makeArray([context.body], results) } return makeArray(context.getElementsByTagName(selector), results) } else { if (assertUsableClassName && match[3] && context.getElementsByClassName) { return makeArray(context.getElementsByClassName(match[3]), results) } } } } } return select(selector, context, results, undefined, contextXML) }; var select = function (selector, context, results, seed, contextXML) { var m, set, checkSet, extra, ret, cur, pop, i, origContext = context, prune = true, parts = [], soFar = selector; do { chunker.exec(""); m = chunker.exec(soFar); if (m) { soFar = m[3]; parts.push(m[1]); if (m[2]) { extra = m[3]; break } } } while (m); if (parts.length > 1 && origPOS.exec(selector)) { if (parts.length === 2 && Expr.relative[parts[0]]) { set = posProcess(parts[0] + parts[1], context, seed, contextXML) } else { set = Expr.relative[parts[0]] ? [context] : Sizzle(parts.shift(), context); while (parts.length) { selector = parts.shift(); if (Expr.relative[selector]) { selector += parts.shift() } set = posProcess(selector, set, seed, contextXML) } } } else { if (!seed && parts.length > 1 && context.nodeType === 9 && !contextXML && matchExpr.ID.test(parts[0]) && !matchExpr.ID.test(parts[parts.length - 1])) { ret = Sizzle.find(parts.shift(), context, contextXML); context = ret.expr ? Sizzle.filter(ret.expr, ret.set)[0] : ret.set[0] } if (context) { ret = seed ? { expr: parts.pop(), set: makeArray(seed) } : Sizzle.find(parts.pop(), (parts.length >= 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode) || context, contextXML); set = ret.expr ? Sizzle.filter(ret.expr, ret.set) : ret.set; if (parts.length > 0) { checkSet = makeArray(set) } else { prune = false } while (parts.length) { cur = parts.pop(); pop = cur; if (!Expr.relative[cur]) { cur = "" } else { pop = parts.pop() } if (pop == null) { pop = context } Expr.relative[cur](checkSet, pop, contextXML) } } else { checkSet = parts = [] } } if (!checkSet) { checkSet = set } if (!checkSet) { Sizzle.error(cur || selector) } if (toString.call(checkSet) === "[object Array]") { if (!prune) { results.push.apply(results, checkSet) } else { if (context && context.nodeType === 1) { for (i = 0; checkSet[i] != null; i++) { if (checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i]))) { results.push(set[i]) } } } else { for (i = 0; checkSet[i] != null; i++) { if (checkSet[i] && checkSet[i].nodeType === 1) { results.push(set[i]) } } } } } else { makeArray(checkSet, results) } if (extra) { select(extra, origContext, results, seed, contextXML); uniqueSort(results) } return results }; var isXML = Sizzle.isXML = function (elem) { var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement; return documentElement ? documentElement.nodeName !== "HTML" : false }; var makeArray = function (array, results) { results = results || []; var i = 0, len = array.length; if (typeof len === "number") { for (; i < len; i++) { results.push(array[i]) } } else { for (; array[i]; i++) { results.push(array[i]) } } return results }; var uniqueSort = Sizzle.uniqueSort = function (results) { if (sortOrder) { hasDuplicate = baseHasDuplicate; results.sort(sortOrder); if (hasDuplicate) { for (var i = 1; i < results.length; i++) { if (results[i] === results[i - 1]) { results.splice(i--, 1) } } } } return results }; var contains = Sizzle.contains = docElem.compareDocumentPosition ? function (a, b) { return !!(a.compareDocumentPosition(b) & 16) } : docElem.contains ? function (a, b) { return a !== b && (a.contains ? a.contains(b) : false) } : function (a, b) { while ((b = b.parentNode)) { if (b === a) { return true } } return false }; Sizzle.matches = function (expr, set) { return select(expr, document, [], set, isXML(document)) }; Sizzle.matchesSelector = function (node, expr) { return select(expr, document, [], [node], isXML(document)).length > 0 }; Sizzle.find = function (expr, context, contextXML) { var set, i, len, match, type, left; if (!expr) { return [] } for (i = 0, len = Expr.order.length; i < len; i++) { type = Expr.order[i]; if ((match = leftMatchExpr[type].exec(expr))) { left = match[1]; match.splice(1, 1); if (left.substr(left.length - 1) !== "\\") { match[1] = (match[1] || "").replace(rbackslash, ""); set = Expr.find[type](match, context, contextXML); if (set != null) { expr = expr.replace(matchExpr[type], ""); break } } } } if (!set) { set = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName("*") : [] } return { set: set, expr: expr } }; Sizzle.filter = function (expr, set, inplace, not) { var match, anyFound, type, found, item, filter, left, i, pass, old = expr, result = [], curLoop = set, isXMLFilter = set && set[0] && isXML(set[0]); while (expr && set.length) { for (type in Expr.filter) { if ((match = leftMatchExpr[type].exec(expr)) != null && match[2]) { filter = Expr.filter[type]; left = match[1]; anyFound = false; match.splice(1, 1); if (left.substr(left.length - 1) === "\\") { continue } if (curLoop === result) { result = [] } if (Expr.preFilter[type]) { match = Expr.preFilter[type](match, curLoop, inplace, result, not, isXMLFilter); if (!match) { anyFound = found = true } else { if (match === true) { continue } } } if (match) { for (i = 0; (item = curLoop[i]) != null; i++) { if (item) { found = filter(item, match, i, curLoop); pass = not ^ found; if (inplace && found != null) { if (pass) { anyFound = true } else { curLoop[i] = false } } else { if (pass) { result.push(item); anyFound = true } } } } } if (found !== undefined) { if (!inplace) { curLoop = result } expr = expr.replace(matchExpr[type], ""); if (!anyFound) { return [] } break } } } if (expr === old) { if (anyFound == null) { Sizzle.error(expr) } else { break } } old = expr } return curLoop }; Sizzle.error = function (msg) { throw new Error("Syntax error, unrecognized expression: " + msg) }; var getText = Sizzle.getText = function (elem) { var i, node, nodeType = elem.nodeType, ret = ""; if (nodeType) { if (nodeType === 1 || nodeType === 9 || nodeType === 11) { if (typeof elem.textContent === "string") { return elem.textContent } else { for (elem = elem.firstChild; elem; elem = elem.nextSibling) { ret += getText(elem) } } } else { if (nodeType === 3 || nodeType === 4) { return elem.nodeValue } } } else { for (i = 0; (node = elem[i]) ; i++) { if (node.nodeType !== 8) { ret += getText(node) } } } return ret }; var Expr = Sizzle.selectors = { match: matchExpr, leftMatch: leftMatchExpr, order: ["ID", "NAME", "TAG"], attrMap: { "class": "className", "for": "htmlFor" }, attrHandle: { href: assertHrefNotNormalized ? function (elem) { return elem.getAttribute("href") } : function (elem) { return elem.getAttribute("href", 2) }, type: function (elem) { return elem.getAttribute("type") } }, relative: { "+": function (checkSet, part) { var isPartStr = typeof part === "string", isTag = isPartStr && !rnonWord.test(part), isPartStrNotTag = isPartStr && !isTag; if (isTag) { part = part.toLowerCase() } for (var i = 0, l = checkSet.length, elem; i < l; i++) { if ((elem = checkSet[i])) { while ((elem = elem.previousSibling) && elem.nodeType !== 1) { } checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ? elem || false : elem === part } } if (isPartStrNotTag) { Sizzle.filter(part, checkSet, true) } }, ">": function (checkSet, part) { var elem, isPartStr = typeof part === "string", i = 0, l = checkSet.length; if (isPartStr && !rnonWord.test(part)) { part = part.toLowerCase(); for (; i < l; i++) { elem = checkSet[i]; if (elem) { var parent = elem.parentNode; checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false } } } else { for (; i < l; i++) { elem = checkSet[i]; if (elem) { checkSet[i] = isPartStr ? elem.parentNode : elem.parentNode === part } } if (isPartStr) { Sizzle.filter(part, checkSet, true) } } }, "": function (checkSet, part, xml) { dirCheck("parentNode", checkSet, part, xml) }, "~": function (checkSet, part, xml) { dirCheck("previousSibling", checkSet, part, xml) } }, find: { ID: assertGetIdNotName ? function (match, context, xml) { if (typeof context.getElementById !== strundefined && !xml) { var m = context.getElementById(match[1]); return m && m.parentNode ? [m] : [] } } : function (match, context, xml) { if (typeof context.getElementById !== strundefined && !xml) { var m = context.getElementById(match[1]); return m ? m.id === match[1] || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [] } }, NAME: function (match, context) { if (typeof context.getElementsByName !== strundefined) { var ret = [], results = context.getElementsByName(match[1]), i = 0, len = results.length; for (; i < len; i++) { if (results[i].getAttribute("name") === match[1]) { ret.push(results[i]) } } return ret.length === 0 ? null : ret } }, TAG: assertTagNameNoComments ? function (match, context) { if (typeof context.getElementsByTagName !== strundefined) { return context.getElementsByTagName(match[1]) } } : function (match, context) { var results = context.getElementsByTagName(match[1]); if (match[1] === "*") { var tmp = [], i = 0; for (; results[i]; i++) { if (results[i].nodeType === 1) { tmp.push(results[i]) } } results = tmp } return results } }, preFilter: { CLASS: function (match, curLoop, inplace, result, not, xml) { match = " " + match[1].replace(rbackslash, "") + " "; if (xml) { return match } for (var i = 0, elem; (elem = curLoop[i]) != null; i++) { if (elem) { if (not ^ (elem.className && (" " + elem.className + " ").replace(rtnfr, " ").indexOf(match) >= 0)) { if (!inplace) { result.push(elem) } } else { if (inplace) { curLoop[i] = false } } } } return false }, ID: function (match) { return match[1].replace(rbackslash, "") }, TAG: function (match, curLoop) { return match[1].replace(rbackslash, "").toLowerCase() }, CHILD: function (match) { if (match[1] === "nth") { if (!match[2]) { Sizzle.error(match[0]) } match[2] = match[2].replace(radjacent, ""); var test = rnth.exec(match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" || !rnonDigit.test(match[2]) && "0n+" + match[2] || match[2]); match[2] = (test[1] + (test[2] || 1)) - 0; match[3] = test[3] - 0 } else { if (match[2]) { Sizzle.error(match[0]) } } match[0] = done++; return match }, ATTR: function (match, curLoop, inplace, result, not, xml) { var name = match[1] = match[1].replace(rbackslash, ""); if (!xml && Expr.attrMap[name]) { match[1] = Expr.attrMap[name] } match[4] = (match[4] || match[5] || "").replace(rbackslash, ""); if (match[2] === "~=") { match[4] = " " + match[4] + " " } return match }, PSEUDO: function (match, curLoop, inplace, result, not, xml) { if (match[1] === "not") { if ((chunker.exec(match[3]) || "").length > 1 || rstartsWithWord.test(match[3])) { match[3] = select(match[3], document, [], curLoop, xml) } else { var ret = Sizzle.filter(match[3], curLoop, inplace, !not); if (!inplace) { result.push.apply(result, ret) } return false } } else { if (matchExpr.POS.test(match[0]) || matchExpr.CHILD.test(match[0])) { return true } } return match }, POS: function (match) { match.unshift(true); return match } }, filters: { enabled: function (elem) { return elem.disabled === false }, disabled: function (elem) { return elem.disabled === true }, checked: function (elem) { var nodeName = elem.nodeName.toLowerCase(); return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected) }, selected: function (elem) { if (elem.parentNode) { elem.parentNode.selectedIndex } return elem.selected === true }, parent: function (elem) { return !!elem.firstChild }, empty: function (elem) { return !elem.firstChild }, has: function (elem, i, match) { return !!Sizzle(match[3], elem).length }, header: function (elem) { return rheader.test(elem.nodeName) }, text: function (elem) { var attr = elem.getAttribute("type"), type = elem.type; return elem.nodeName.toLowerCase() === "input" && "text" === type && (attr === null || attr.toLowerCase() === type) }, radio: function (elem) { return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type }, checkbox: function (elem) { return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type }, file: function (elem) { return elem.nodeName.toLowerCase() === "input" && "file" === elem.type }, password: function (elem) { return elem.nodeName.toLowerCase() === "input" && "password" === elem.type }, submit: function (elem) { var name = elem.nodeName.toLowerCase(); return (name === "input" || name === "button") && "submit" === elem.type }, image: function (elem) { return elem.nodeName.toLowerCase() === "input" && "image" === elem.type }, reset: function (elem) { var name = elem.nodeName.toLowerCase(); return (name === "input" || name === "button") && "reset" === elem.type }, button: function (elem) { var name = elem.nodeName.toLowerCase(); return name === "input" && "button" === elem.type || name === "button" }, input: function (elem) { return rinputs.test(elem.nodeName) }, focus: function (elem) { var doc = elem.ownerDocument; return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href) }, active: function (elem) { return elem === elem.ownerDocument.activeElement }, contains: function (elem, i, match) { return (elem.textContent || elem.innerText || getText(elem)).indexOf(match[3]) >= 0 } }, setFilters: { first: function (elem, i) { return i === 0 }, last: function (elem, i, match, array) { return i === array.length - 1 }, even: function (elem, i) { return i % 2 === 0 }, odd: function (elem, i) { return i % 2 === 1 }, lt: function (elem, i, match) { return i < match[3] - 0 }, gt: function (elem, i, match) { return i > match[3] - 0 }, nth: function (elem, i, match) { return match[3] - 0 === i }, eq: function (elem, i, match) { return match[3] - 0 === i } }, filter: { PSEUDO: function (elem, match, i, array) { var name = match[1], filter = Expr.filters[name]; if (filter) { return filter(elem, i, match, array) } else { if (name === "not") { var not = match[3], j = 0, len = not.length; for (; j < len; j++) { if (not[j] === elem) { return false } } return true } else { Sizzle.error(name) } } }, CHILD: function (elem, match) { var first, last, doneName, parent, cache, count, diff, type = match[1], node = elem; switch (type) { case "only": case "first": while ((node = node.previousSibling)) { if (node.nodeType === 1) { return false } } if (type === "first") { return true } node = elem; case "last": while ((node = node.nextSibling)) { if (node.nodeType === 1) { return false } } return true; case "nth": first = match[2]; last = match[3]; if (first === 1 && last === 0) { return true } doneName = match[0]; parent = elem.parentNode; if (parent && (parent[expando] !== doneName || !elem.nodeIndex)) { count = 0; for (node = parent.firstChild; node; node = node.nextSibling) { if (node.nodeType === 1) { node.nodeIndex = ++count } } parent[expando] = doneName } diff = elem.nodeIndex - last; if (first === 0) { return diff === 0 } else { return (diff % first === 0 && diff / first >= 0) } } }, ID: assertGetIdNotName ? function (elem, match) { return elem.nodeType === 1 && elem.getAttribute("id") === match } : function (elem, match) { var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id"); return elem.nodeType === 1 && node && node.nodeValue === match }, TAG: function (elem, match) { return (match === "*" && elem.nodeType === 1) || !!elem.nodeName && elem.nodeName.toLowerCase() === match }, CLASS: function (elem, match) { return (" " + (elem.className || elem.getAttribute("class")) + " ").indexOf(match) > -1 }, ATTR: function (elem, match) { var name = match[1], result = Sizzle.attr ? Sizzle.attr(elem, name) : Expr.attrHandle[name] ? Expr.attrHandle[name](elem) : elem[name] != null ? elem[name] : elem.getAttribute(name), value = result + "", type = match[2], check = match[4]; return result == null ? type === "!=" : !type && Sizzle.attr ? result != null : type === "=" ? value === check : type === "*=" ? value.indexOf(check) >= 0 : type === "~=" ? (" " + value + " ").indexOf(check) >= 0 : !check ? value && result !== false : type === "!=" ? value !== check : type === "^=" ? value.indexOf(check) === 0 : type === "$=" ? value.substr(value.length - check.length) === check : type === "|=" ? value === check || value.substr(0, check.length + 1) === check + "-" : false }, POS: function (elem, match, i, array) { var name = match[2], filter = Expr.setFilters[name]; if (filter) { return filter(elem, i, match, array) } } } }; if (assertUsableClassName) { Expr.order.splice(1, 0, "CLASS"); Expr.find.CLASS = function (match, context, xml) { if (typeof context.getElementsByClassName !== strundefined && !xml) { return context.getElementsByClassName(match[1]) } } } var sortOrder, siblingCheck; if (docElem.compareDocumentPosition) { sortOrder = function (a, b) { if (a === b) { hasDuplicate = true; return 0 } if (!a.compareDocumentPosition || !b.compareDocumentPosition) { return a.compareDocumentPosition ? -1 : 1 } return a.compareDocumentPosition(b) & 4 ? -1 : 1 } } else { sortOrder = function (a, b) { if (a === b) { hasDuplicate = true; return 0 } else { if (a.sourceIndex && b.sourceIndex) { return a.sourceIndex - b.sourceIndex } } var al, bl, ap = [], bp = [], aup = a.parentNode, bup = b.parentNode, cur = aup; if (aup === bup) { return siblingCheck(a, b) } else { if (!aup) { return -1 } else { if (!bup) { return 1 } } } while (cur) { ap.unshift(cur); cur = cur.parentNode } cur = bup; while (cur) { bp.unshift(cur); cur = cur.parentNode } al = ap.length; bl = bp.length; for (var i = 0; i < al && i < bl; i++) { if (ap[i] !== bp[i]) { return siblingCheck(ap[i], bp[i]) } } return i === al ? siblingCheck(a, bp[i], -1) : siblingCheck(ap[i], b, 1) }; siblingCheck = function (a, b, ret) { if (a === b) { return ret } var cur = a.nextSibling; while (cur) { if (cur === b) { return -1 } cur = cur.nextSibling } return 1 } } if (document.querySelectorAll) { (function () { var oldSelect = select, id = "__sizzle__", rrelativeHierarchy = /^\s*[+~]/, rapostrophe = /'/g, rbuggyQSA = []; assert(function (div) { div.innerHTML = "<select><option selected></option></select>"; if (!div.querySelectorAll("[selected]").length) { rbuggyQSA.push("\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)") } if (!div.querySelectorAll(":checked").length) { rbuggyQSA.push(":checked") } }); assert(function (div) { div.innerHTML = "<p class=''></p>"; if (div.querySelectorAll("[class^='']").length) { rbuggyQSA.push("[*^$]=[\\x20\\t\\n\\r\\f]*(?:\"\"|'')") } div.innerHTML = "<input type='hidden'>"; if (!div.querySelectorAll(":enabled").length) { rbuggyQSA.push(":enabled", ":disabled") } }); rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")); select = function (selector, context, results, seed, contextXML) { if (!seed && !contextXML && (!rbuggyQSA || !rbuggyQSA.test(selector))) { if (context.nodeType === 9) { try { return makeArray(context.querySelectorAll(selector), results) } catch (qsaError) { } } else { if (context.nodeType === 1 && context.nodeName.toLowerCase() !== "object") { var oldContext = context, old = context.getAttribute("id"), nid = old || id, parent = context.parentNode, relativeHierarchySelector = rrelativeHierarchy.test(selector); if (!old) { context.setAttribute("id", nid) } else { nid = nid.replace(rapostrophe, "\\$&") } if (relativeHierarchySelector && parent) { context = parent } try { if (!relativeHierarchySelector || parent) { return makeArray(context.querySelectorAll("[id='" + nid + "'] " + selector), results) } } catch (qsaError) { } finally { if (!old) { oldContext.removeAttribute("id") } } } } } return oldSelect(selector, context, results, seed, contextXML) } })() } function dirCheck(dir, checkSet, part, xml) { var elem, match, isElem, nodeCheck, doneName = done++, i = 0, len = checkSet.length; if (typeof part === "string" && !rnonWord.test(part)) { part = part.toLowerCase(); nodeCheck = part } for (; i < len; i++) { elem = checkSet[i]; if (elem) { match = false; elem = elem[dir]; while (elem) { if (elem[expando] === doneName) { match = checkSet[elem.sizset]; break } isElem = elem.nodeType === 1; if (isElem && !xml) { elem[expando] = doneName; elem.sizset = i } if (nodeCheck) { if (elem.nodeName.toLowerCase() === part) { match = elem; break } } else { if (isElem) { if (typeof part !== "string") { if (elem === part) { match = true; break } } else { if (Sizzle.filter(part, [elem]).length > 0) { match = elem; break } } } } elem = elem[dir] } checkSet[i] = match } } } var posProcess = function (selector, context, seed, contextXML) { var match, tmpSet = [], later = "", root = context.nodeType ? [context] : context, i = 0, len = root.length; while ((match = matchExpr.PSEUDO.exec(selector))) { later += match[0]; selector = selector.replace(matchExpr.PSEUDO, "") } if (Expr.relative[selector]) { selector += "*" } for (; i < len; i++) { select(selector, root[i], tmpSet, seed, contextXML) } return Sizzle.filter(later, tmpSet) }; window.Sizzle = Sizzle; window['sizzle'] = Sizzle; })(window);/*Sizzle end*/
(function(){var c=!0,f=!1,g=this;var j,k,l,n;function o(){return g.navigator?g.navigator.userAgent:null}n=l=k=j=f;var q;if(q=o()){var r=g.navigator;j=0==q.indexOf("Opera");k=!j&&-1!=q.indexOf("MSIE");l=!j&&-1!=q.indexOf("WebKit");n=!j&&!l&&"Gecko"==r.product}var t=j,u=k,w=n,x=l,y;
a:{var z="",A;if(t&&g.opera)var B=g.opera.version,z="function"==typeof B?B():B;else if(w?A=/rv\:([^\);]+)(\)|;)/:u?A=/MSIE\s+([^\);]+)(\)|;)/:x&&(A=/WebKit\/(\S+)/),A)var C=A.exec(o()),z=C?C[1]:"";if(u){var D,E=g.document;D=E?E.documentMode:void 0;if(D>parseFloat(z)){y=""+D;break a}}y=z}var F={};
function G(b){var a;if(!(a=F[b])){a=0;for(var d=(""+y).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=(""+b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),p=Math.max(d.length,e.length),m=0;0==a&&m<p;m++){var v=d[m]||"",S=e[m]||"",T=RegExp("(\\d*)(\\D*)","g"),U=RegExp("(\\d*)(\\D*)","g");do{var h=T.exec(v)||["","",""],i=U.exec(S)||["","",""];if(0==h[0].length&&0==i[0].length)break;a=((0==h[1].length?0:parseInt(h[1],10))<(0==i[1].length?0:parseInt(i[1],10))?-1:(0==h[1].length?0:parseInt(h[1],10))>
(0==i[1].length?0:parseInt(i[1],10))?1:0)||((0==h[2].length)<(0==i[2].length)?-1:(0==h[2].length)>(0==i[2].length)?1:0)||(h[2]<i[2]?-1:h[2]>i[2]?1:0)}while(0==a)}a=F[b]=0<=a}return a}var H={};function I(){H[9]||(H[9]=u&&!!document.documentMode&&9<=document.documentMode)};!u||I();!u||I();u&&G("8");!x||G("528");w&&G("1.9b")||u&&G("8")||t&&G("9.5")||x&&G("528");!w||G("8");function J(b,a,d,e,p){b&&a&&("undefined"==typeof d&&(d=1E3),"undefined"==typeof e&&(e=20),0>--e?"function"===typeof p&&p():a()?b():setTimeout(function(){J(b,a,d,e,p)},d))};function K(b){function a(){d||(d=c,b())}var d=f;if("complete"===document.readyState||"interactive"===document.readyState)a();else{if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,f);else if(document.attachEvent){try{var e=null!=window.frameElement}catch(p){}if(document.documentElement.doScroll&&!e){var m=function(){if(!d)try{document.documentElement.doScroll("left"),a()}catch(b){setTimeout(m,10)}};m()}document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&
a()})}if(window.addEventListener)window.addEventListener("load",a,f);else if(window.attachEvent)window.attachEvent("onload",a);else{var v=window.onload;window.onload=function(){v&&v();a()}}}};function L(b){"function"===typeof ClickTaleExec&&ClickTaleExec(b)}function M(b,a){"function"===typeof ClickTaleEvent&&(a?M.b[b]!==c&&(M.b[b]=c,ClickTaleEvent(b)):ClickTaleEvent(b))}M.b={};function N(b){"function"===typeof window.ClickTaleRegisterElementAction&&(ClickTaleRegisterElementAction("mouseover",b),ClickTaleRegisterElementAction("click",b))}window.ClickTaleDetectAgent&&window.ClickTaleDetectAgent()&&window.ClickTaleDetectAgent();var O=L,P=M;var Q={reviewObject__gs:"Gamespot",reviewObject__metacritic:"Metacritic",reviewObject__userAvg:"User"};function R(b){return 0<b.length?c:f}function V(b,a){jQuery(document).one("mouseup",function(d){b===d.target&&a()})}
function W(){var b=jQuery("#search-main").val();O('jQuery("#resultsWrap").html(\'<li class="notificationBar selected"><span id="notificationText">Search for</span> <span id="notificationTerm">'+b+'</span></li><li class="loading"></li>\'); jQuery(".loading").css("background","url(http://static.gamespot.com//bundles/phoenixsite/images/core/loose/loading-hearts.gif) no-repeat center top");');var a=0;setTimeout(function(){var d=setInterval(function(){if(2<jQuery(".js-autocomplete-list li:visible").length){clearInterval(d);
var e=jQuery("#resultsWrap").html();O("jQuery('#resultsWrap').html(unescape('"+escape(e)+"')); ");O("jQuery('#resultsWrap li').eq(jQuery('#resultsWrap li').length - 1).attr('class','').css({ 'text-align': 'right', 'padding': '8px' });");0<jQuery(".prev").length&&O("jQuery('#resultsWrap li').eq(0).attr('class','').css({ 'text-align': 'right', 'padding': '8px' });")}else 0<jQuery(".noResults").length?(clearInterval(d),O('jQuery("#resultsWrap").html(\'<li class="notificationBar selected"><span id="notificationText">Search for</span> <span id="notificationTerm">'+
b+'</span></li><li class=""><div class="noResults">tis but a barren wasteland</div></li>\');')):40<a&&clearInterval(d);a++},100)},300)}
function X(){if(!window.ClickTaleFirstPCCGo){window.ClickTaleFirstPCCGo=c;jQuery(window).on("beforeunload",function(){window.s&&window.s.eVar44&&"not in test"!=window.s.eVar44&&P("Test: ["+window.s.eVar44+"]");window.s&&window.s.eVar10&&P("Page Type: ["+window.s.eVar10+"]")});jQuery(document).mousedown(function(a){var a=a.target,b=jQuery(a),e=b.closest(".reviewObject a");R(e)?V(a,function(a){return function(){var b=a.closest("dl").attr("class").match(/reviewObject__[^\s]+/);(b=b&&Q[b[0]])&&P(b+" Rating Click")}}(e)):
(e=b.closest(".subnav-list .subnav-list__item").not(".subnav-list__item-primary"),R(e)&&V(a,function(a){return function(){var b=jQuery.trim(a.text());b&&P(b+" Tab Click")}}(b)))});jQuery(".stacks").one("mousedown",function(){P("Clicked on follow button")});if(R(jQuery("CT_Version[ver]"))){var b=jQuery("CT_Version[ver]").attr("ver");b&&P("AB Test Version: "+jQuery.trim(b))}document.location.href.toLowerCase().indexOf("reviews")&&jQuery(".pod-section.breakdown-score").click(function(){P("Player Review Box Clicked")});
0<jQuery(".user-block").length&&P("Logged In User");jQuery(".social-facebook").mouseup(function(){P("Facebook Clicked")});jQuery(".social-twitter").mouseup(function(){P("Twitter Clicked")});jQuery(".social-youtube").mouseup(function(){P("YouTube Clicked")});jQuery(".masthead-eyebrow a").mouseup(function(a){"A"==a.target.nodeName&&N(a)});jQuery(".logo-site").mouseup(function(a){"A"!==a.target.nodeName&&(a.target=jQuery(".logo-site")[0],a.srcElement=jQuery(".logo-site")[0],N(a))});jQuery(".stacks-action__container.js-pop-over-toggle span").mouseup(function(a){var b=
jQuery(".stacks-action__container.js-pop-over-toggle span").index(this);a.target=jQuery(".stacks-action__container.js-pop-over-toggle:eq("+b+")")[0];a.srcElement=jQuery(".stacks-action__container.js-pop-over-toggle:eq("+b+")")[0];N(a)});jQuery("body").mouseup(function(){setTimeout(function(){jQuery("#resultsWrap").is(":visible")||L("jQuery('body').click();")},300)});jQuery("#search-main").click(function(){O("jQuery('#search-main').click();")});jQuery(".next").on("mouseup",function(){W()});jQuery(".prev").on("mouseup",
function(){W()});jQuery("#search-main").keyup(function(){var a=jQuery(this).val();O("jQuery('#search-main').val('"+a+"'); jQuery('#search-main').click();");W()});jQuery("#search-main").one("keyup",function(){P("Search Box Interacted")});jQuery("#resultsWrap li").on("mouseenter",function(){var a=jQuery("#resultsWrap li").index(this);O("jQuery('#resultsWrap li').eq("+a+").addClass('selected');")});jQuery("#resultsWrap li").on("mouseleave",function(){var a=jQuery("#resultsWrap li").index(this);O("jQuery('#resultsWrap li').eq("+
a+").removeClass('selected');")});0<jQuery("#masthead").length&&setTimeout(function(){O("jQuery('#masthead').css('z-index', '1000')");O('jQuery(\'#masthead-logo\').html(\'<a href="/" data-click-track-id="coreHeaderFrontDoor" class="logo-site"> <span class="logo-site--short" style="-webkit-transform: rotateX(0deg); opacity: 1; background-image: url(http://static.gamespot.com/bundles/gamespotsite/images/logo.png); background-position: initial initial; background-repeat: initial initial;"></span> <span class="logo-site--full" style="display:none; opacity: 1; background-image: url(http://static.gamespot.com/bundles/gamespotsite/images/logo-full.png);"></span></a>\');');
O("jQuery('#masthead-logo').css({'left': '-60px', 'top': '15px'}); jQuery('.masthead-platforms a').css('padding','0 8px'); jQuery('#search-main').css('background','white'); jQuery('.logo-site--full').css({'left': '-90px', 'top': '-30px'}); jQuery('.dropdown-menu.typeahead, #search-main').css('width','250px');");var a;"0"==jQuery(".logo-site--short").css("opacity")?(O("jQuery('.logo-site--full').show(); jQuery('.logo-site--short').hide();"),a=f):(O("jQuery('.logo-site--full').hide(); jQuery('.logo-site--short').show();"),
a=c);var b=c;jQuery(document).scroll(function(){0<=jQuery(document).scrollTop()&&30>jQuery(document).scrollTop()?(0<jQuery(".kubrick.kubrick-lead.kubrick-lead--ring").length&&(O("jQuery('.masthead-eyebrow').show();"),O("jQuery('#masthead').css('marginTop','0px');")),O("jQuery('.logo-site--short').css('display','block');"),b=c,O("jQuery('.masthead-eyebrow').slideDown('fast'); "),a&&O("jQuery('.logo-site--full').hide(); jQuery('.logo-site--short').show();")):30<=jQuery(document).scrollTop()&&(0<jQuery(".kubrick.kubrick-lead.kubrick-lead--ring").length&&
(O("jQuery('.masthead-eyebrow').hide();"),O("jQuery('#masthead').css('marginTop','30px');")),O("jQuery('.logo-site--short').css('display','none');"),b&&(b=f,O("jQuery('.masthead-eyebrow').slideUp('fast'); "),a&&O("jQuery('.logo-site--full').show(); jQuery('.logo-site--short').hide();")))})},1E3);jQuery(".nav-bar__item").on({mouseenter:function(){var a=jQuery(this).index(".nav-bar__item");O("jQuery('.nav-bar__item:eq("+a+") > a').attr('style','color:#e03800')")},mouseleave:function(){var a=jQuery(this).index(".nav-bar__item");
O("jQuery('.nav-bar__item:eq("+a+") > a').attr('style','')")}});jQuery(".js-dropnav").on({mouseenter:function(){var a=jQuery(this).index(".js-dropnav");0==a&&O("jQuery('.dropnav-menu__item:eq(0)').addClass('dropnav-menu__active')");O("jQuery('.js-dropnav .dropdown-menu:eq("+a+")').show()")},mouseleave:function(){var a=jQuery(this).index(".js-dropnav");O("jQuery('.js-dropnav .dropdown-menu:eq("+a+")').hide()")}});jQuery(".dropnav-menu__item").on({mouseenter:function(){var a=jQuery(this).index(".dropnav-menu__item");
O("jQuery('.dropnav-menu__item:eq("+a+")').addClass('dropnav-menu__active')")},mouseleave:function(){var a=jQuery(this).index(".dropnav-menu__item");O("jQuery('.dropnav-menu__item:eq("+a+")').removeClass('dropnav-menu__active')")}});jQuery(".dropnav-community .dropnav-list__item:not(.list-break)").on({mouseenter:function(){var a=jQuery(this).index("li[class^=dropnav-list]:not(.list-break)");O("jQuery('.dropnav-community > li[class^=dropnav-list]:eq("+(a+1)+")').addClass('dropnav-menu__active').find('a:not(.btn)').attr('style','color:#e03800;')")},
mouseleave:function(){var a=jQuery(this).index("li[class^=dropnav-list]:not(.list-break)");O("jQuery('.dropnav-community >li[class^=dropnav-list]:eq("+(a+1)+")').removeClass('dropnav-menu__active').find('a').attr('style','')")}});jQuery(".dropnav-submenu__item .dropnav-submenu__label").on({mouseenter:function(){var a=jQuery(this).index(".dropnav-submenu__item .dropnav-submenu__label");O("jQuery('.dropnav-submenu__item .dropnav-submenu__label:eq("+a+")').attr('style','color:#e03800')")},mouseleave:function(){var a=
jQuery(this).index(".dropnav-submenu__item .dropnav-submenu__label");O("jQuery('.dropnav-submenu__item .dropnav-submenu__label:eq("+a+")').attr('style','')")}})}}
(function(b){function a(){2==++window.okToStartOn2&&b()}window.okToStartOn2=0;K(function(){a()});if("undefined"!==typeof window.ClickTaleIsRecording&&window.ClickTaleIsRecording()===c)a();else{var d=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){a();return d.apply(this,arguments)}}})(function(){J(X,function(){return window.jQuery&&"function"===typeof jQuery.fn.on?c:f},250,40)});})();



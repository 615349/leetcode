Given an absolute path for a file (Unix-style), simplify it. 

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
path = "/a/../../b/../c//.//", => "/c"
path = "/a//b////c/d//././/..", => "/a/b/c"

In a UNIX-style file system, a period ('.') refers to the current directory, so it can be ignored in a simplified path. Additionally, a double period ("..") moves up a directory, so it cancels out whatever the last directory was. For more information, look here: https://en.wikipedia.org/wiki/Path_(computing)#Unix_style

Corner Cases:

Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".



因为双点(..)会做一个相当于删除最近路径的操作，很容易想到利用数组
对path做split('/'), 其得到的数组arr已经把所有的'/'去除了
注意：
'/home/'.split('/') ===> ['', 'home', ''];
所以arr元素可能有四种情况，空格，正常的字母，单点(.)和双点(..)
剩下的就是对arr数组进行判断，如果元素不是空，单点或双点，直接push到result数组。
如果是双点，则pop一次，不用管result是否为空

const SLASH = '/';
const SINGLE_DOT = '.';
const DOUBLE_DOT = '..';
const EMPTY = '';

var simplifyPath = function(path) {
    const arr = path.split(SLASH);
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== EMPTY && arr[i] !== SINGLE_DOT && arr[i] !== DOUBLE_DOT) {
            result.push(arr[i])
        } else if (arr[i] === DOUBLE_DOT) {
            result.pop()
        }
    }
    
    return SLASH + result.join(SLASH);
};

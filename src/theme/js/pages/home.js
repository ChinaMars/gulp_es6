import $ from 'jquery';
import common from '../common.js';
import _ from 'lodash';
import include from 'lodash.includes'
common();
$('#text').attr('title','es6');

console.log(_.includes([1, 2, 3],2))
const obj = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

const Arrays = {
  data:[
    {'user':'Mars','age': 26, 'active': true},
    {'user':'crystal','age': 24, 'active': false}
  ]
}

_.forEach(obj, (value, key) => {
  console.log(key + ' ' + value);
})



for(let x in obj) {
  console.log(obj[x]);
}


let ab = _.filter(Arrays.data,(o) => o.age < 30)
let val = _.mapValues(ab,(o) => o.age)
_.forEach(val, (value, key) => {
  console.log(key + ' ' + value);
})
console.log(_.map(ab,'age'));



const Array = [1,3,6,2,5,3]
const Array2 = [2,4,3]
/*二个数组对比筛选出相同的值*/
let cc = _.filter(Array,function(o){
  console.log(o);
  return Array2.indexOf(o) != -1
});

/*合并数组中相同的值*/
let bb = _.uniq(cc)
_.forEach(bb, (value, key) => {
  console.log(value);
})


const Array3 = ['cc',1,'aa','bb',3,'aa']
let aa = _.filter(Array3, function(value,index,iteratee) {
  // 通过includes索引+1的方法排除本身查找是否有相同的值(第三个参数是从第几个开始查找)
  return _.includes(iteratee,value,index+1)
})
console.log(aa)

let dd = _.filter(Arrays.data,(o) => o.active)

console.log(dd)

console.log(_.times(5, _.uniqueId.bind(null, 'contact_')));

function foo(func){
  console.log("invoked foo.");
  func();
}

var done = _.after(1,function bar(){
  console.log("invoke bar");
});

for( var i = 0; i <  4; i++ ){
  foo(done);
}


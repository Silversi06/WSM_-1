 # style 적용 3가지 방법
 1. <...style="..."> in HTML
 2. ```<style>..</style>```in HTML```<head>```
 1._.css 파일 만들어서 link_

 #형식
 ```css
 selector {
    attribute: value;  /* comment*/
}
 ```

 ## selector
 <pre>

* 
#id     선택자 앞에 해시(#) 기호를 붙여서 id를 대상으로 삼습니다. 
.class class 선택자입니다. id와 class의 차이점이라면, 후자는 여러 개의 요소를 대상으로 정할 수 있습니다.
TAG

selector1 selector2    selector1 요소의 자손 selector2  요소를 선택한다
selector1 > selector2   selector1 요소의 자식 중 모든 selector2
selector1 , selector2   선택자 그룹을 생성하는 방법으로 모든 일치하는 노드를 선택
selector1 + selector2   selector1의 첫째 자매 selector2 하나 선택
selector1 ~ selector2   selector1의 첫째 자매 중 모든 selector2 선택
                        p ~ ul:p요소 뒤에 있는 모든 형제 ul 선택한데요
selector:first-child()  selector 요소 중 첫번째 
selecotor:nth-child(n)   자매 요소 중에서 특정 순서 (n) 에 있는 요소를 선택할 때 
selector:hover  요소의 마우스가 올라가는 동안selector를 선택

[속성="값"]        <... 속성 ="값">인 모든 요소 선택
</pre>
# 우선순위
1. !important
2. #id
3. .class
4 .TAG
5. \*
- 구체>포괄
6. 같은 우선순위일 때, 나중에 쓴게 적용




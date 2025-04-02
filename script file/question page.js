// Question page to back main Index page 
document.getElementById('back-home-page').addEventListener('click' ,function(){
    window.location.href="./index.html"
 });

 document.getElementById('question_answer').innerHTML=`
 <h1 class="text-center md:text-2xl text-xl font-bold mt-5">Blogs</h1>
            <!-- question and answer part  -->
            <div class="mt-5 mx-3">
                <div class="bg-white p-5 rounded-lg">
                    <p class="font-bold my-5">Question-1: What are the different ways to select an element in the DOM?</p>
                    <hr>
                    <p class="mt-3">Answer : In javascript element are selected by different types of methods getElemetById , getElementsbyClass , getElemntsBytagName so many various types others inbuild slector Javscript file has. </p>
                </div>
                <div class="bg-white p-5 rounded-lg mt-5">
                    <h1 class="font-bold my-5">Question-2: What is the difference between innerHTML, innerText, and textContent ?</h1>
                    <hr>
                    <p class="mt-3">Answer : innerText Basically mean the html file a tag inner value that specefic value find out and called by innerText and javascript when we work operation and the value send to the file also use the innerText only can value store.And on the otherhand innerHTMl that full the tag and value mean .Its contain  value and html tag. </p>
                </div>
                <div class="bg-white p-5 rounded-lg mt-5">
                    <h1 class="font-bold my-5">Question-3: What is event delegation in the DOM?</h1>
                    <hr>
                    <p class="mt-3">Answer : Event Delegation is a technique in JavaScript where a single event listener is added to a parent element instead of multiple listeners on individual child elements. This takes advantage of event bubbling, allowing events to "bubble up" from a child element to a parent. </p>
                </div>
                <div class="bg-white p-5 rounded-lg mt-5">
                    <h1 class="font-bold my-5">Question-4: What is event bubbling in the DOM?</h1>
                    <hr>
                    <p class="mt-3">Answer : Event bubble that works a step by step the container parents, grandparent, child that type it work.If no event handlers stop the propagation, the event will continue bubbling.</p>
                </div>
                <div class="bg-white p-5 rounded-lg mt-5">
                    <h1 class="font-bold my-5">Question-5: How do you create, add, and remove elements using JavaScript?</h1>
                    <hr>
                    <p class="mt-3">Answer : Create a element document.createElements() ,and add that child to use the appendChild(). innerHTML and appendChild() that also ,newElement.remove()</p>
                </div>
            </div>
 `


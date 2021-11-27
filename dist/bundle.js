(()=>{"use strict";class e{constructor(e,t,n,r){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}function t(e){let t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.value&&(t=t&&e.value.length>=e.minLength),null!=e.maxLength&&"string"==typeof e.value&&(t=t&&e.value.length<=e.maxLength),null!=e.min&&"number"==typeof e.value&&(t=t&&e.value>=e.min),null!=e.max&&"number"==typeof e.value&&(t=t&&e.value<=e.max),t}function n(e,t,n){const r=n.value;return{configurable:!0,get(){return r.bind(this)}}}var r;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(r||(r={}));class s{constructor(e,t,n,r,s){this.id=e,this.title=t,this.description=n,this.manday=r,this.status=s}}class i extends class{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new i),this.instance}addProject(e,t,n){const i=new s(Math.random().toString(),e,t,n,r.Active);this.projects.push(i),this.updateListeners()}moveProject(e,t){const n=this.projects.find((t=>t.id===e));n&&n.status!==t&&(n.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const a=i.getInstance();class l extends e{constructor(){super("project-input","app",!0,"user-input"),this.titleInputElement=this.element.querySelector("#title"),this.descriptionInputElement=this.element.querySelector("#description"),this.mandayInputElement=this.element.querySelector("#manday"),this.configure()}configure(){this.element.addEventListener("submit",this.submitHandler)}renderContent(){}gatherUserInput(){const e=this.titleInputElement.value,n=this.descriptionInputElement.value,r=this.mandayInputElement.value,s={value:n,required:!0,minLength:5},i={value:+r,required:!0,min:1,max:1e3};return t({value:e,required:!0})&&t(s)&&t(i)?[e,n,+r]:void alert("入力値が正しくありません。再度お試しください。")}clearInputs(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.mandayInputElement.value=""}submitHandler(e){e.preventDefault();const t=this.gatherUserInput();if(Array.isArray(t)){const[e,n,r]=t;a.addProject(e,n,r),console.log(e,n,r),this.clearInputs()}}}!function(e,t,n,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(i<3?s(a):i>3?s(t,n,a):s(t,n))||a);i>3&&a&&Object.defineProperty(t,n,a)}([n],l.prototype,"submitHandler",null);class o extends e{constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}get manday(){return this.project.manday<20?this.project.manday.toString()+"人日":(this.project.manday/20).toString()+"人月"}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){console.log("Drag終了")}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.manday,this.element.querySelector("p").textContent=this.project.description}}!function(e,t,n,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(i<3?s(a):i>3?s(t,n,a):s(t,n))||a);i>3&&a&&Object.defineProperty(t,n,a)}([n],o.prototype,"dragStartHandler",null);var c=function(e,t,n,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(i<3?s(a):i>3?s(t,n,a):s(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};class d extends e{constructor(e){super("project-list","app",!1,`${e}-projects`),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}dragOverHandler(e){e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]&&(e.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}dropHandler(e){const t=e.dataTransfer.getData("text/plain");a.moveProject(t,"active"===this.type?r.Active:r.Finished)}dragLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("drop",this.dropHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),a.addListener((e=>{const t=e.filter((e=>"active"===this.type?e.status===r.Active:e.status===r.Finished));this.assignedProjects=t,this.renderProjects()}))}renderContent(){const e=`${this.type}-projects-list`;this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent="active"===this.type?"実行中プロジェクト":"完了プロジェクト"}renderProjects(){const e=document.getElementById(`${this.type}-projects-list`);e.innerHTML="";for(const t of this.assignedProjects)new o(e.id,t)}}c([n],d.prototype,"dragOverHandler",null),c([n],d.prototype,"dropHandler",null),c([n],d.prototype,"dragLeaveHandler",null),new l,new d("active"),new d("finished")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXJFLEtBQUtRLFFBQVE4RCxpQkFBaUIsV0FBWXRFLEtBQUtvRyxpQkFDL0NwRyxLQUFLUSxRQUFROEQsaUJBQWlCLE9BQVF0RSxLQUFLd0csYUFDM0N4RyxLQUFLUSxRQUFROEQsaUJBQWlCLFlBQWF0RSxLQUFLNEcsa0JBRWhEOUMsRUFBYXBCLGFBQWFJLElBQ3hCLE1BQU1nRSxFQUFtQmhFLEVBQVNpRSxRQUFRbkQsR0FDdEIsV0FBZDVELEtBQUtrRyxLQUNBdEMsRUFBSXJCLFNBQVdMLEVBQWNtQixPQUUvQk8sRUFBSXJCLFNBQVdMLEVBQWN5RSxXQUV0QzNHLEtBQUttRyxpQkFBbUJXLEVBQ3hCOUcsS0FBS2dILG9CQUlUeEMsZ0JBQ0UsTUFBTXlDLEVBQVMsR0FBR2pILEtBQUtrRyxxQkFDdkJsRyxLQUFLUSxRQUFRMEQsY0FBYyxNQUFPeEQsR0FBS3VHLEVBQ3ZDakgsS0FBS1EsUUFBUTBELGNBQWMsTUFBTzhCLFlBQ2xCLFdBQWRoRyxLQUFLa0csS0FBb0IsWUFBYyxXQUduQ2MsaUJBQ04sTUFBTUUsRUFBU2hILFNBQVNDLGVBQ3RCLEdBQUdILEtBQUtrRyxzQkFFVmdCLEVBQU9DLFVBQVksR0FDbkIsSUFBSyxNQUFNQyxLQUFXcEgsS0FBS21HLGlCQUN6QixJQUFJVixFQUFZeUIsRUFBT3hHLEdBQUkwRyxJQXJEL0IsR0FEQzFGLEcsb0NBVUQsR0FEQ0EsRyxnQ0FVRCxHQURDQSxHLHFDQ3RDSCxJQUFJc0MsRUFDSixJQUFJaUMsRUFBWSxVQUNoQixJQUFJQSxFQUFZLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nX3R5cGVzY3JpcHQvLi9zcmMvZGV2L2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZ190eXBlc2NyaXB0Ly4vc3JjL2Rldi91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZ190eXBlc2NyaXB0Ly4vc3JjL2Rldi9kZWNvcmF0b3JzL2F1dG9iaW5kLnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmdfdHlwZXNjcmlwdC8uL3NyYy9kZXYvbW9kZWxzL3Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZ190eXBlc2NyaXB0Ly4vc3JjL2Rldi9zdGF0ZS9wcm9qZWN0LXN0YXRlLnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmdfdHlwZXNjcmlwdC8uL3NyYy9kZXYvY29tcG9uZW50cy9wcm9qZWN0LWlucHV0LnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmdfdHlwZXNjcmlwdC8uL3NyYy9kZXYvY29tcG9uZW50cy9wcm9qZWN0LWl0ZW0udHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZ190eXBlc2NyaXB0Ly4vc3JjL2Rldi9jb21wb25lbnRzL3Byb2plY3QtbGlzdC50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nX3R5cGVzY3JpcHQvLi9zcmMvZGV2L2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnQgQ2xhc3NcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50LCBVIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IHtcbiAgdGVtcGxhdGVFbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICBob3N0RWxlbWVudDogVDtcbiAgZWxlbWVudDogVTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0ZW1wbGF0ZUlkOiBzdHJpbmcsXG4gICAgaG9zdEVsZW1lbnRJZDogc3RyaW5nLFxuICAgIGluc2VydEF0U3RhcnQ6IGJvb2xlYW4sXG4gICAgbmV3RWxlbWVudElkPzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICB0ZW1wbGF0ZUlkXG4gICAgKSEgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCkhIGFzIFQ7XG5cbiAgICBjb25zdCBpbXBvcnRlZE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxuICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudCxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIHRoaXMuZWxlbWVudCA9IGltcG9ydGVkTm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBVO1xuICAgIGlmIChuZXdFbGVtZW50SWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5pZCA9IG5ld0VsZW1lbnRJZDtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2goaW5zZXJ0QXRTdGFydCk7XG4gIH1cblxuICBhYnN0cmFjdCBjb25maWd1cmUoKTogdm9pZDtcbiAgYWJzdHJhY3QgcmVuZGVyQ29udGVudCgpOiB2b2lkO1xuXG4gIHByaXZhdGUgYXR0YWNoKGluc2VydEF0QmVnaW5uaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG4gICAgICBpbnNlcnRBdEJlZ2lubmluZyA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLFxuICAgICAgdGhpcy5lbGVtZW50XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gVmFsaWRhdGlvblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0YWJsZSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgbWluTGVuZ3RoPzogbnVtYmVyO1xuICBtYXhMZW5ndGg/OiBudW1iZXI7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUodmFsaWRhdGFibGVJbnB1dDogVmFsaWRhdGFibGUpIHtcbiAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICBpZiAodmFsaWRhdGFibGVJbnB1dC5yZXF1aXJlZCkge1xuICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwO1xuICB9XG4gIGlmIChcbiAgICB2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aCAhPSBudWxsICYmXG4gICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdzdHJpbmcnXG4gICkge1xuICAgIGlzVmFsaWQgPVxuICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA+PSB2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aDtcbiAgfVxuICBpZiAoXG4gICAgdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGggIT0gbnVsbCAmJlxuICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnc3RyaW5nJ1xuICApIHtcbiAgICBpc1ZhbGlkID1cbiAgICAgIGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPD0gdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGg7XG4gIH1cbiAgaWYgKFxuICAgIHZhbGlkYXRhYmxlSW5wdXQubWluICE9IG51bGwgJiZcbiAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ251bWJlcidcbiAgKSB7XG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA+PSB2YWxpZGF0YWJsZUlucHV0Lm1pbjtcbiAgfVxuICBpZiAoXG4gICAgdmFsaWRhdGFibGVJbnB1dC5tYXggIT0gbnVsbCAmJlxuICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnbnVtYmVyJ1xuICApIHtcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlIDw9IHZhbGlkYXRhYmxlSW5wdXQubWF4O1xuICB9XG4gIHJldHVybiBpc1ZhbGlkO1xufVxuIiwiLy8gYXV0b2JpbmQgZGVjb3JhdG9yXG5leHBvcnQgZnVuY3Rpb24gYXV0b2JpbmQoXzogYW55LCBfMjogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICBjb25zdCBhZGpEZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGJvdW5kRm4gPSBvcmlnaW5hbE1ldGhvZC5iaW5kKHRoaXMpO1xuICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGFkakRlc2NyaXB0b3I7XG59XG4iLCIvLyBQcm9qZWN0IFR5cGVcbmV4cG9ydCBlbnVtIFByb2plY3RTdGF0dXMge1xuICBBY3RpdmUsXG4gIEZpbmlzaGVkLFxufVxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgbWFuZGF5OiBudW1iZXIsXG4gICAgcHVibGljIHN0YXR1czogUHJvamVjdFN0YXR1c1xuICApIHt9XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuXG4vLyBQcm9qZWN0IFN0YXRlIE1hbmFnZW1lbnRcbnR5cGUgTGlzdGVuZXI8VD4gPSAoaXRlbXM6IFRbXSkgPT4gdm9pZDtcblxuY2xhc3MgU3RhdGU8VD4ge1xuICBwcm90ZWN0ZWQgbGlzdGVuZXJzOiBMaXN0ZW5lcjxUPltdID0gW107XG4gIGFkZExpc3RlbmVyKGxpc3RlbmVyRm46IExpc3RlbmVyPFQ+KSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lckZuKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFByb2plY3RTdGF0ZSBleHRlbmRzIFN0YXRlPFByb2plY3Q+IHtcbiAgcHJpdmF0ZSBwcm9qZWN0czogUHJvamVjdFtdID0gW107XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQcm9qZWN0U3RhdGU7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQcm9qZWN0U3RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGFkZFByb2plY3QodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgbWFuZGF5OiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbWFuZGF5LFxuICAgICAgUHJvamVjdFN0YXR1cy5BY3RpdmVcbiAgICApO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgbW92ZVByb2plY3QocHJvamVjdElkOiBzdHJpbmcsIG5ld1N0YXR1czogUHJvamVjdFN0YXR1cykge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByaikgPT4gcHJqLmlkID09PSBwcm9qZWN0SWQpO1xuICAgIGlmIChwcm9qZWN0ICYmIHByb2plY3Quc3RhdHVzICE9PSBuZXdTdGF0dXMpIHtcbiAgICAgIHByb2plY3Quc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyRm4gb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RTdGF0ZSA9IFByb2plY3RTdGF0ZS5nZXRJbnN0YW5jZSgpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBWYWxpZGF0aW9uIGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBhdXRvYmluZCBhcyBBdXRvYmluZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQnO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcHJvamVjdC1zdGF0ZSc7XG5cbi8vIFByb2plY3RJbnB1dCBDbGFzc1xuZXhwb3J0IGNsYXNzIFByb2plY3RJbnB1dCBleHRlbmRzIENvbXBvbmVudDxIVE1MRGl2RWxlbWVudCwgSFRNTEZvcm1FbGVtZW50PiB7XG4gIHRpdGxlSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuICBkZXNjcmlwdGlvbklucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgbWFuZGF5SW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdwcm9qZWN0LWlucHV0JywgJ2FwcCcsIHRydWUsICd1c2VyLWlucHV0Jyk7XG5cbiAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI3RpdGxlJ1xuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2Rlc2NyaXB0aW9uJ1xuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLm1hbmRheUlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNtYW5kYXknXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gIH1cblxuICBjb25maWd1cmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlcik7XG4gIH1cblxuICByZW5kZXJDb250ZW50KCkge31cblxuICBwcml2YXRlIGdhdGhlclVzZXJJbnB1dCgpOiBbc3RyaW5nLCBzdHJpbmcsIG51bWJlcl0gfCB2b2lkIHtcbiAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZE1hbmRheSA9IHRoaXMubWFuZGF5SW5wdXRFbGVtZW50LnZhbHVlO1xuXG4gICAgY29uc3QgdGl0bGVWYWxpZGF0YWJsZTogVmFsaWRhdGlvbi5WYWxpZGF0YWJsZSA9IHtcbiAgICAgIHZhbHVlOiBlbnRlcmVkVGl0bGUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsaWRhdGFibGU6IFZhbGlkYXRpb24uVmFsaWRhdGFibGUgPSB7XG4gICAgICB2YWx1ZTogZW50ZXJlZERlc2NyaXB0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDUsXG4gICAgfTtcbiAgICBjb25zdCBtYW5kYXlWYWxpZGF0YWJsZTogVmFsaWRhdGlvbi5WYWxpZGF0YWJsZSA9IHtcbiAgICAgIHZhbHVlOiArZW50ZXJlZE1hbmRheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluOiAxLFxuICAgICAgbWF4OiAxMDAwLFxuICAgIH07XG5cbiAgICBpZiAoXG4gICAgICAhVmFsaWRhdGlvbi52YWxpZGF0ZSh0aXRsZVZhbGlkYXRhYmxlKSB8fFxuICAgICAgIVZhbGlkYXRpb24udmFsaWRhdGUoZGVzY3JpcHRpb25WYWxpZGF0YWJsZSkgfHxcbiAgICAgICFWYWxpZGF0aW9uLnZhbGlkYXRlKG1hbmRheVZhbGlkYXRhYmxlKVxuICAgICkge1xuICAgICAgYWxlcnQoJ+WFpeWKm+WApOOBjOato+OBl+OBj+OBguOCiuOBvuOBm+OCk+OAguWGjeW6puOBiuippuOBl+OBj+OBoOOBleOBhOOAgicpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2VudGVyZWRUaXRsZSwgZW50ZXJlZERlc2NyaXB0aW9uLCArZW50ZXJlZE1hbmRheV07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcklucHV0cygpIHtcbiAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMubWFuZGF5SW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gIH1cblxuICBAQXV0b2JpbmRcbiAgcHJpdmF0ZSBzdWJtaXRIYW5kbGVyKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcklucHV0ID0gdGhpcy5nYXRoZXJVc2VySW5wdXQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VySW5wdXQpKSB7XG4gICAgICBjb25zdCBbdGl0bGUsIGRlc2MsIG1hbmRheV0gPSB1c2VySW5wdXQ7XG4gICAgICBwcm9qZWN0U3RhdGUuYWRkUHJvamVjdCh0aXRsZSwgZGVzYywgbWFuZGF5KTtcbiAgICAgIGNvbnNvbGUubG9nKHRpdGxlLCBkZXNjLCBtYW5kYXkpO1xuICAgICAgdGhpcy5jbGVhcklucHV0cygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgYXV0b2JpbmQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL2F1dG9iaW5kJztcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4uL21vZGVscy9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jb21wb25lbnQnO1xuXG4vLyBQcm9qZWN0SXRlbSBDbGFzc1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW1cbiAgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTFVMaXN0RWxlbWVudCwgSFRNTExJRWxlbWVudD5cbiAgaW1wbGVtZW50cyBEcmFnZ2FibGVcbntcbiAgcHJpdmF0ZSBwcm9qZWN0OiBQcm9qZWN0O1xuXG4gIGdldCBtYW5kYXkoKSB7XG4gICAgaWYgKHRoaXMucHJvamVjdC5tYW5kYXkgPCAyMCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC5tYW5kYXkudG9TdHJpbmcoKSArICfkurrml6UnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKHRoaXMucHJvamVjdC5tYW5kYXkgLyAyMCkudG9TdHJpbmcoKSArICfkurrmnIgnO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGhvc3RJZDogc3RyaW5nLCBwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgc3VwZXIoJ3NpbmdsZS1wcm9qZWN0JywgaG9zdElkLCBmYWxzZSwgcHJvamVjdC5pZCk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcblxuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZHJhZ1N0YXJ0SGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyIS5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5wcm9qZWN0LmlkKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIhLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gIH1cblxuICBkcmFnRW5kSGFuZGxlcihfOiBEcmFnRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnRHJhZ+e1guS6hicpO1xuICB9XG5cbiAgY29uZmlndXJlKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gIH1cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGU7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJykhLnRleHRDb250ZW50ID0gdGhpcy5tYW5kYXk7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QuZGVzY3JpcHRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7IGF1dG9iaW5kIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9hdXRvYmluZCc7XG5pbXBvcnQgeyBEcmFnVGFyZ2V0IH0gZnJvbSAnLi4vbW9kZWxzL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcHJvamVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3RJdGVtIH0gZnJvbSAnLi9wcm9qZWN0LWl0ZW0nO1xuXG4vLyBQcm9qZWN0TGlzdCBDbGFzc1xuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0XG4gIGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRWxlbWVudD5cbiAgaW1wbGVtZW50cyBEcmFnVGFyZ2V0XG57XG4gIGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6ICdhY3RpdmUnIHwgJ2ZpbmlzaGVkJykge1xuICAgIHN1cGVyKCdwcm9qZWN0LWxpc3QnLCAnYXBwJywgZmFsc2UsIGAke3R5cGV9LXByb2plY3RzYCk7XG5cbiAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcblxuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhO1xuICAgICAgbGlzdEVsLmNsYXNzTGlzdC5hZGQoJ2Ryb3BwYWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBwcm9qZWN0U3RhdGUubW92ZVByb2plY3QoXG4gICAgICBwcmpJZCxcbiAgICAgIHRoaXMudHlwZSA9PT0gJ2FjdGl2ZScgPyBQcm9qZWN0U3RhdHVzLkFjdGl2ZSA6IFByb2plY3RTdGF0dXMuRmluaXNoZWRcbiAgICApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRyYWdMZWF2ZUhhbmRsZXIoXzogRHJhZ0V2ZW50KSB7XG4gICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhO1xuICAgIGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgfVxuXG4gIGNvbmZpZ3VyZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVySGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3BIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVIYW5kbGVyKTtcblxuICAgIHByb2plY3RTdGF0ZS5hZGRMaXN0ZW5lcigocHJvamVjdHM6IFByb2plY3RbXSkgPT4ge1xuICAgICAgY29uc3QgcmVsZXZhbnRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJqKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgcmV0dXJuIHByai5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuQWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSByZWxldmFudFByb2plY3RzO1xuICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBsaXN0SWQgPSBgJHt0aGlzLnR5cGV9LXByb2plY3RzLWxpc3RgO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpIS5pZCA9IGxpc3RJZDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKSEudGV4dENvbnRlbnQgPVxuICAgICAgdGhpcy50eXBlID09PSAnYWN0aXZlJyA/ICflrp/ooYzkuK3jg5fjg63jgrjjgqfjgq/jg4gnIDogJ+WujOS6huODl+ODreOCuOOCp+OCr+ODiCc7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IGxpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YFxuICAgICkhIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbGlzdEVsLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgcHJqSXRlbSBvZiB0aGlzLmFzc2lnbmVkUHJvamVjdHMpIHtcbiAgICAgIG5ldyBQcm9qZWN0SXRlbShsaXN0RWwuaWQsIHByakl0ZW0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUHJvamVjdElucHV0IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3QtaW5wdXQnO1xuaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdC1saXN0JztcblxubmV3IFByb2plY3RJbnB1dCgpO1xubmV3IFByb2plY3RMaXN0KCdhY3RpdmUnKTtcbm5ldyBQcm9qZWN0TGlzdCgnZmluaXNoZWQnKTtcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlSWQiLCJob3N0RWxlbWVudElkIiwiaW5zZXJ0QXRTdGFydCIsIm5ld0VsZW1lbnRJZCIsInRoaXMiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaG9zdEVsZW1lbnQiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnROb2RlIiwiY29udGVudCIsImVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlkIiwiYXR0YWNoIiwiaW5zZXJ0QXRCZWdpbm5pbmciLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJ2YWxpZGF0ZSIsInZhbGlkYXRhYmxlSW5wdXQiLCJpc1ZhbGlkIiwicmVxdWlyZWQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwidHJpbSIsImxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsImF1dG9iaW5kIiwiXyIsIl8yIiwiZGVzY3JpcHRvciIsIm9yaWdpbmFsTWV0aG9kIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwiYmluZCIsIlByb2plY3RTdGF0dXMiLCJQcm9qZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hbmRheSIsInN0YXR1cyIsIlByb2plY3RTdGF0ZSIsImxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwibGlzdGVuZXJGbiIsInB1c2giLCJzdXBlciIsInByb2plY3RzIiwic3RhdGljIiwiaW5zdGFuY2UiLCJhZGRQcm9qZWN0IiwibmV3UHJvamVjdCIsIk1hdGgiLCJyYW5kb20iLCJBY3RpdmUiLCJ1cGRhdGVMaXN0ZW5lcnMiLCJtb3ZlUHJvamVjdCIsInByb2plY3RJZCIsIm5ld1N0YXR1cyIsInByb2plY3QiLCJmaW5kIiwicHJqIiwic2xpY2UiLCJwcm9qZWN0U3RhdGUiLCJnZXRJbnN0YW5jZSIsIlByb2plY3RJbnB1dCIsInRpdGxlSW5wdXRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImRlc2NyaXB0aW9uSW5wdXRFbGVtZW50IiwibWFuZGF5SW5wdXRFbGVtZW50IiwiY29uZmlndXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Ym1pdEhhbmRsZXIiLCJyZW5kZXJDb250ZW50IiwiZ2F0aGVyVXNlcklucHV0IiwiZW50ZXJlZFRpdGxlIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwiZW50ZXJlZE1hbmRheSIsImRlc2NyaXB0aW9uVmFsaWRhdGFibGUiLCJtYW5kYXlWYWxpZGF0YWJsZSIsImFsZXJ0IiwiY2xlYXJJbnB1dHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlcklucHV0IiwiQXJyYXkiLCJpc0FycmF5IiwiZGVzYyIsImNvbnNvbGUiLCJsb2ciLCJQcm9qZWN0SXRlbSIsImhvc3RJZCIsImRyYWdTdGFydEhhbmRsZXIiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyYWdFbmRIYW5kbGVyIiwidGV4dENvbnRlbnQiLCJQcm9qZWN0TGlzdCIsInR5cGUiLCJhc3NpZ25lZFByb2plY3RzIiwiZHJhZ092ZXJIYW5kbGVyIiwidHlwZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJkcm9wSGFuZGxlciIsInByaklkIiwiZ2V0RGF0YSIsIkZpbmlzaGVkIiwiZHJhZ0xlYXZlSGFuZGxlciIsInJlbW92ZSIsInJlbGV2YW50UHJvamVjdHMiLCJmaWx0ZXIiLCJyZW5kZXJQcm9qZWN0cyIsImxpc3RJZCIsImxpc3RFbCIsImlubmVySFRNTCIsInByakl0ZW0iXSwic291cmNlUm9vdCI6IiJ9
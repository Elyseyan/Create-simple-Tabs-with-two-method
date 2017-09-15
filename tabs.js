function Tabs(ElementId,TabsNav,TabsCon) {
   _this =this;
    this.oTabs=document.getElementById(ElementId);
    this.aTabsNav=this.oTabs.querySelectorAll(TabsNav);
    this.aTabsCnt=this.oTabs.querySelectorAll(TabsCon);
}
Tabs.prototype.init=function () {
    for(var i=0;i<this.aTabsNav.length;i++){
        this.aTabsNav[i].index=i;
        this.aTabsNav[i].onclick=function () {
            _this.swich(this);
        }
    }
};

Tabs.prototype.swich=function (oneNav) {
    for(var i=0;i<this.aTabsNav.length;i++){
       this.aTabsNav[i].className="";
       this.aTabsCnt[i].style.display="none"
    }
    this.aTabsNav[oneNav.index].className="active";
    this.aTabsCnt[oneNav.index].style.display="block";

};


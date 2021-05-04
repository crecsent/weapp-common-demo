Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    curTab:{type:String,value:'home'}
  },
  data: {
    styles:[],
    middle:2,
    iconPosis:[40,180,325,510,650],
    iconNames:['map','discuss','home','notice','setting']
  },
  lifetimes:{
    attached:function() {
      let {middle,iconPosis,iconNames}=this.data;
      let {curTab} = this.properties;
      let current = iconNames.indexOf(curTab),styles=[];
      
      for(let i=0;i<iconPosis.length;i++){
        styles.push(`
        position:fixed;bottom:${i==middle?28:12}rpx;
        font-size: 52rpx;
        left:${iconPosis[i]}rpx;
        ${i===middle?'width:100rpx;height:100rpx;border-radius:50%;background-color:white;text-align:center;line-height:100rpx;border:1px solid var(--grey);':''}`
        );
      }
      this.setData({
        styles:styles,
        current:current
      });
    }
  },
  methods: {
    switch(e){
      let {iconNames} = this.data;
      let {id} = e.currentTarget.dataset;
      this.setData({
        current: id
      });
      this.triggerEvent('switch',iconNames[id]);
    }
  }
})

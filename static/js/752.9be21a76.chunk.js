"use strict";(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[752],{752:function(s,e,t){t.r(e),t.d(e,{default:function(){return V}});var i=t(1413),r=t(5671),o=t(3144),n=t(136),a=t(5716),l=t(2791),u=t(364),c=t(6070),d=t(704),h=t(6139),f=t(1557),p=t(9086),x="MyPosts_postsBlock__r6tDq",j="MyPosts_posts__4pUsA",v="Post_item__AueTq",m=t(184),b=function(s){return(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"}),s.message,(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:"like"})," ",s.likesCount]})]})},g=l.memo((function(s){var e=s.posts.map((function(s){return(0,m.jsx)(b,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("h3",{children:"My Posts"}),(0,m.jsx)(k,{onSubmit:function(e){s.addPost(e.newPostText)}}),(0,m.jsx)("div",{className:j,children:e})]})})),P=(0,f.D)(10),k=(0,d.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,m.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)(h.Z,{name:"newPostText",component:p.gx,placeholder:"Post message",validate:[f.C,P]})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Add post"})})]})})),S=g,y=(0,u.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(e){s((0,c.Wl)(e))}}}))(S),_=t(885),I=t(5739),w="ProfileInfo_descriptionBlock__fI29I",A="ProfileInfo_mainPhoto__BxLV7",C="ProfileInfo_contact__Qvirx",Z=function(s){var e=(0,l.useState)(!1),t=(0,_.Z)(e,2),i=t[0],r=t[1],o=(0,l.useState)(s.status),n=(0,_.Z)(o,2),a=n[0],u=n[1];(0,l.useEffect)((function(){u(s.status)}),[s.status]);return(0,m.jsxs)("div",{children:[!i&&(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Status: "}),(0,m.jsx)("span",{onDoubleClick:function(){r(!0)},children:s.status||"-----"})]}),i&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(s){u(s.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),s.updateStatus(a)},value:a})})]})},N=t(4353),M=t(9234),F=(0,d.Z)({form:"edit-profile"})((function(s){var e=s.handleSubmit,t=s.profile,i=s.error;return(0,m.jsxs)("form",{onSubmit:e,children:[(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"save"})}),i&&(0,m.jsx)("div",{className:M.Z.formSummaryError,children:i}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Full name "}),": ",(0,p.Gr)("Full name","fullName",[],p.II)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Looking for a job "}),":",(0,p.Gr)("","lookingForAJob",[],p.II,{type:"checkbox"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"My professional skills "}),":",(0,p.Gr)("My professional skills","lookingForAJobDescription",[],p.gx)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"About me"}),":",(0,p.Gr)("About me","aboutMe",[],p.gx)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(t.contacts).map((function(s){return(0,m.jsx)("div",{className:C,children:(0,m.jsxs)("b",{children:[s,": ",(0,p.Gr)(s,"contacts."+s,[],p.II)]})},s)}))]})]})})),T=function(s){var e=s.profile,t=s.isOwner,i=s.goToEditMode;return(0,m.jsxs)("div",{children:[t&&(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:i,children:"edit"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Full name "}),": ",e.fullName]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Looking for a job "}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"My professional skills "}),": ",e.lookingForAJobDescription]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(e.contacts).map((function(s){return(0,m.jsx)(D,{contactTitle:s,contactValue:e.contacts[s]},s)}))]})]})},D=function(s){var e=s.contactTitle,t=s.contactValue;return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("b",{children:e}),": ",t]})},O=function(s){var e=s.profile,t=s.status,i=s.updateStatus,r=s.isOwner,o=s.savePhoto,n=s.saveProfile,a=(0,l.useState)(!1),u=(0,_.Z)(a,2),c=u[0],d=u[1];if(!e)return(0,m.jsx)(I.Z,{});return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:w,children:[(0,m.jsx)("img",{src:e.photos.large||N,className:A}),r&&(0,m.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&o(s.target.files[0])}}),c?(0,m.jsx)(F,{initialValues:e,profile:e,onSubmit:function(s){n(s).then((function(){d(!1)}))}}):(0,m.jsx)(T,{goToEditMode:function(){d(!0)},profile:e,isOwner:r}),(0,m.jsx)(Z,{status:t,updateStatus:i})]})})},J=function(s){return(0,m.jsxs)("div",{children:[(0,m.jsx)(O,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,m.jsx)(y,{})]})},U=t(1548),E=t(7781),G=t(5628),B=function(s){(0,n.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,r.Z)(this,t),e.apply(this,arguments)}return(0,o.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.router.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.router.params.userId!=s.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsx)(J,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),V=(0,E.qC)((0,u.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:c.et,getStatus:c.lR,updateStatus:c.Nf,savePhoto:c.Ju,saveProfile:c.Ii}),G.E,U.D)(B)}}]);
//# sourceMappingURL=752.9be21a76.chunk.js.map
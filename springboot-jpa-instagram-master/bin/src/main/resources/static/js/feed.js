var page = 2;
let photo_box = `<div class="photo u-default-box"><header class="photo__header"><img src="/images/avatar.jpg" /><div class="photo_user_info"><span class="photo__username">image.user.username</span><span class="photo__location">image.location</span></div></header><div class="photo_post_image"><img src="/upload/28e24986-9ab0-4f91-8c52-bcbc56bd4f0b_minho.jpg" /></div><div class="photo__info"><div class="photo__actions"><span class="photo__action"> <i class="fa fa-heart-o heart"></i></span> <span class="photo__action"> <i class="fa fa-comment-o"></i></span></div><span class="photo__likes">5,103 likes</span><div class="photo_caption"><span class="photo__username">image.user.username </span>image.caption</div><div class="photo_tag">#태그 #태그</div><ul class="photo__comments"><li class="photo__comment"><span class="photo__comment-author">serranoarevalo</span> ilove this!</li><li class="photo__comment"><span class="photo__comment-author">serranoarevalo</span> idon't love this!</li></ul><span class="photo__date">image.createDate</span><div class="photo__add-comment-container"><textarea placeholder="Add a comment..."></textarea><i class="fa fa-ellipsis-h"></i></div></div></div >`;
$(window).scroll(function() {
	if ($(window).scrollTop() == $(document).height() - $(window).height()) {
		$("#feed").append(photo_box);
    }
});
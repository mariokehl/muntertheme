lib.onepage = COA
lib.onepage {
	10 = CONTENT
	10 {
		table = pages
		select.orderBy = sorting

		renderObj = COA
		renderObj {
			10 = CONTENT
			10 {
				table = tt_content
				select {
					pidInList.field = uid
					orderBy = sorting
					where = colPos = 0
				}
                wrap = <div class="slide story" id="{field:css_id}" data-slide="{field:nav_title}">|</div>
				wrap.insertData = 1
			}
		}
	}
}

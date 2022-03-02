/* Bismillah */

/*

UI COMPONENT TEMPLATE
- You can customize, this template code as you need:


Started Date: 22 February 2022
Developer: Bugra Ozden
Email: bugra.ozden@gmail.com
Personal Site: https://www.bugraozden.com/


LICENSE:

You are free:

to Share — to copy, distribute and transmit the work
to Remix — to adapt the work
to make commercial use of the work

https://creativecommons.org/licenses/by/4.0/

Have Fun.

*/


var clickEffect = {}
clickEffect.active = 1

clickEffect.create = function() {

    page.onClick(function(self) {

        if (clickEffect.active) {

            var e = window.event;
            var posX = e.clientX;
            var posY = e.clientY;

            createBox(posX - 10, posY - 10, 20, 20)
            that.color = "black"
            that.round = 50
            that.border = 0
            that.borderColor = "gray"
            that.setMotion("left 0.4s, top 0.4s, opacity 0.4s, width 0.4s, height 0.4s")
            that.opacity = 0.1
            that.withMotion(function(self) {

                self.opacity = 0
                self.width += 40
                self.height += 40
                self.top -= 20
                self.left -= 20
            })
            
            var _that = that
            setTimeout(function() {

                _that.remove()
            }, 2500)
        }
    })
}

clickEffect.show = function() {
    clickEffect.active = 1
}

clickEffect.hide = function() {
    clickEffect.active = 0
}

            
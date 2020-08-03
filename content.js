$(window).ready(function () {

    setTimeout(function () {
        addCopyLink()
    }, 1000)
    $(window).on("scroll", function () {
        addCopyLink()
    })

    function addCopyLink() {

        for (let MEAGs of $(`div.MEAGs`)) {

            if ($(MEAGs).find('.copy-image-url').length == 0) {
                $($(MEAGs))
                    .prepend(
                        $(`
                <div class="copy-image-url">
                    <img src="https://img.icons8.com/small/24/000000/copy.png"/>
                <div>
                `).on('click', function () {
                            let link = $(this).parents().eq(2).find('.FFVAD').attr('src')
                            convertImgToBase64(link, function (base64Img) {
                                var $temp = $("<input>");
                                $("body").append($temp);
                                $temp.val(base64Img).select();
                                document.execCommand("copy");
                                $temp.remove();
                            });

                        })
                    )
            }
        }
        function convertImgToBase64(url, callback, outputFormat) {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var img = new Image;
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL(outputFormat || 'image/png');
                callback.call(this, dataURL);
                // Clean up
                canvas = null;
            };
            img.src = url;
        }


    }
})
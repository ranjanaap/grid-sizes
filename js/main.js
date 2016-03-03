(function () {
    
    function size() {
        var $this = $(this),
            $small = $this.find('.small');
        
        $small.text($this.width());
    }
    
    
     var $links = $('header').find('span');
    
    function resize() {
        var w = ($(this).data('size'));
        
        $('.content').width(w);
        $('.col').each(size);
    }
    
    $links.on('click', resize);
    
    $(window).on('load', function(e) {
        $('.col').each(size);
    });
    
}());

(function () {
    var $links = $('header').find('span');
    
    function resize() {
        var w = ($(this).data('size'));
        
        $('.content').width(w);
    }
    
    $links.on('click', resize);
}());

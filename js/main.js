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
    
    $(window).on('resize', function(e) {
        $('.col').each(size);
    }).trigger('resize');
    
}());

(function () {
    var $links = $('header').find('span');
    
    function resize() {
        var w = ($(this).data('size'));
        
        $('.content').width(w);
    }
    
    $links.on('click', resize);
}());

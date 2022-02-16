@extends('app')
<script>
var comments = {!! json_encode($comments) !!}

var post_id = {!! json_encode($post_id) !!}

var commentUser = {!! json_encode($user) !!}
var post = {!! json_encode($post) !!}
var posts = {!! json_encode($posts) !!}
let postUser = {!! json_encode($postUser) !!}
</script>
@section('content')
    @if(session()->has('success_message'))
        <div class="container w-80">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session()->get('success_message') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    @endif
    <script>

        var comments = {!! json_encode($comments) !!}
        
        var post_id = {!! json_encode($post_id) !!}
        
        // console.log({{$post_id}})
        var post = {!! json_encode($post) !!}
        
        $('.alert').alert();
        </script>
    <div id="thread"></div>
@endsection
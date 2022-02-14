@extends('app')


@section('content')
    @if(session()->has('error_message'))
        <div class="container w-80">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {{ session()->get('error_message') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    @endif
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
    let posts = {!! json_encode($posts) !!}
    let comments = {!! json_encode($comments) !!};
    console.log({!! json_encode($globalData) !!});
    $('.alert').alert();
</script>
  
    <div id="index"></div>
@endsection